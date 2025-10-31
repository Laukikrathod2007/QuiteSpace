import { useCallback, useEffect, useState } from 'react';
import { account } from '@/lib/appwrite';

export function useAuth() {
  const [user, setUser] = useState<null | any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      const me = await account.get();
      setUser(me);
      setError(null);
    } catch (e: any) {
      setUser(null);
      setError(null); // silent when not logged in
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const register = useCallback(async (email: string, password: string, name?: string) => {
    await account.create('unique()', email, password, name);
    await account.createEmailPasswordSession(email, password);
    await refresh();
  }, [refresh]);

  const login = useCallback(async (email: string, password: string) => {
    await account.createEmailPasswordSession(email, password);
    await refresh();
  }, [refresh]);

  const loginAnonymous = useCallback(async () => {
    await account.createAnonymousSession();
    await refresh();
  }, [refresh]);

  const logout = useCallback(async () => {
    await account.deleteSession('current');
    await refresh();
  }, [refresh]);

  return { user, loading, error, register, login, loginAnonymous, logout, refresh };
}
