import useSWR from 'swr';
import { UserType } from '@/lib/type';
import fetcher from '@/lib/fetcher';
import { useSession } from 'next-auth/react';

const useUsers = () => {
  const { data: session } = useSession();
  const { data, error, isLoading, mutate } = useSWR<UserType[]>(
    `/api/users`,
    fetcher
  );

  const users = data?.filter(
    (user) => session && user.email !== session?.user?.email
  );

  return {
    users,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
