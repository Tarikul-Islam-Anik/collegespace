import useSWR from 'swr';
import { User } from '@/lib/type';
import fetcher from '@/lib/fetcher';
import useCurrentUser from './useCurrentUser';

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR<User[]>(
    `/api/users`,
    fetcher
  );
  const { currentUser } = useCurrentUser();

  const users = data
    ?.filter((user) => currentUser && user.id !== currentUser.id)
    .sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });

  return {
    users,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
