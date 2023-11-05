import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { User } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useUser = (userId?: string) => {
  const { data: session } = useSession();

  if (userId) {
    const {
      data: user,
      error,
      isLoading,
      mutate,
    } = useSWR<User>(`/api/users/${userId}`, fetcher);
    return {
      user,
      error,
      isLoading,
      mutate,
    };
  } else {
    const {
      data: user,
      error,
      isLoading,
      mutate,
    } = useSWR<User>(
      // @ts-ignore
      `/api/users/${session?.user?.email}`,
      fetcher
    );
    return {
      user,
      error,
      isLoading,
      mutate,
    };
  }
};

export default useUser;
