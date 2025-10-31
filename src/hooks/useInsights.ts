import { useCallback, useEffect, useState } from 'react';
import { functions } from '@/lib/appwrite';

export function useInsights(config: { functionId: string; userId?: string }) {
  const { functionId, userId } = config;
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInsights = useCallback(async () => {
    try {
      setLoading(true);
      const res = await functions.createExecution(functionId, JSON.stringify({ userId }));
      const payload = JSON.parse(res.responseBody || 'null');
      setData(payload);
      setError(null);
    } catch (e: any) {
      setError(e.message || 'Failed to fetch insights');
    } finally {
      setLoading(false);
    }
  }, [functionId, userId]);

  useEffect(() => { fetchInsights(); }, [fetchInsights]);

  return { data, loading, error, refetch: fetchInsights };
}
