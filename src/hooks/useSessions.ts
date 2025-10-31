import { useCallback, useEffect, useMemo, useState } from 'react';
import { databases, realtime } from '@/lib/appwrite';
import type { FocusSession } from '@/types/appwrite';
import { ID, Query } from 'appwrite';

export function useSessions(config: { databaseId: string; collectionId: string; userId?: string }) {
  const { databaseId, collectionId, userId } = config;
  const [sessions, setSessions] = useState<FocusSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const queries = useMemo(() => (userId ? [Query.equal('userId', userId), Query.orderDesc('startedAt')] : [Query.orderDesc('startedAt')]), [userId]);

  const list = useCallback(async () => {
    try {
      setLoading(true);
      const res = await databases.listDocuments(databaseId, collectionId, queries);
      setSessions(res.documents as any);
      setError(null);
    } catch (e: any) {
      setError(e.message || 'Failed to fetch sessions');
    } finally {
      setLoading(false);
    }
  }, [databaseId, collectionId, queries]);

  useEffect(() => {
    list();
  }, [list]);

  useEffect(() => {
    const sub = realtime.subscribe([
      `databases.${databaseId}.collections.${collectionId}.documents`
    ], response => {
      const { events, payload } = response;
      if (events.some(e => e.endsWith('.create'))) {
        setSessions(prev => [payload as any, ...prev]);
      }
      if (events.some(e => e.endsWith('.delete'))) {
        setSessions(prev => prev.filter(s => (s as any).$id !== (payload as any).$id));
      }
      if (events.some(e => e.endsWith('.update'))) {
        setSessions(prev => prev.map(s => ((s as any).$id === (payload as any).$id ? (payload as any) : s)));
      }
    });
    return () => sub();
  }, [databaseId, collectionId]);

  const create = useCallback(async (doc: FocusSession) => {
    const res = await databases.createDocument(databaseId, collectionId, ID.unique(), doc as any);
    return res as any as FocusSession;
  }, [databaseId, collectionId]);

  return { sessions, loading, error, list, create };
}
