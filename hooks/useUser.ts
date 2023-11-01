import useSWR from 'swr';
import { User } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR<User>(
    `/api/users/${userId}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
