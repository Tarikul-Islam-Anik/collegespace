import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { UserType } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useUser = (email?: string) => {
  const { data: session } = useSession();
  const userEmail = email || session?.user?.email;

  const { data: user, error, isLoading, mutate } = useSWR<UserType>(
    userEmail ? `/api/users/${userEmail}` : null,
    fetcher
  );

  return {
    user,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
