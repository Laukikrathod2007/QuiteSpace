import { useCallback, useEffect, useState } from 'react';
import { databases } from '@/lib/appwrite';
import type { AutomationRule } from '@/types/appwrite';
import { ID, Query } from 'appwrite';

export function useAutomations(config: { databaseId: string; collectionId: string; userId?: string }) {
  const { databaseId, collectionId, userId } = config;
  const [items, setItems] = useState<AutomationRule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const list = useCallback(async () => {
    try {
      setLoading(true);
      const res = await databases.listDocuments(databaseId, collectionId, userId ? [Query.equal('userId', userId)] : undefined);
      setItems(res.documents as any);
      setError(null);
    } catch (e: any) {
      setError(e.message || 'Failed to fetch automations');
    } finally {
      setLoading(false);
    }
  }, [databaseId, collectionId, userId]);

  useEffect(() => { list(); }, [list]);

  const create = useCallback(async (doc: AutomationRule) => {
    const res = await databases.createDocument(databaseId, collectionId, ID.unique(), doc as any);
    setItems(prev => [res as any, ...prev]);
    return res as any as AutomationRule;
  }, [databaseId, collectionId]);

  const update = useCallback(async (id: string, patch: Partial<AutomationRule>) => {
    const res = await databases.updateDocument(databaseId, collectionId, id, patch as any);
    setItems(prev => prev.map(a => ((a as any).$id === id ? (res as any) : a)));
    return res as any as AutomationRule;
  }, [databaseId, collectionId]);

  const remove = useCallback(async (id: string) => {
    await databases.deleteDocument(databaseId, collectionId, id);
    setItems(prev => prev.filter(a => (a as any).$id !== id));
  }, [databaseId, collectionId]);

  return { items, loading, error, list, create, update, remove };
}
