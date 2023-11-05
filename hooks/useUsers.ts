import useSWR from 'swr';
import { User } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR<User[]>(
    `/api/users`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
