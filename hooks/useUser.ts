import useSWR from 'swr';
import { UserType } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useUser = (email?: string) => {
  const userEmail = email || 'currentUser';

  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR<UserType>(`/api/users/${userEmail}`, fetcher);

  return {
    user,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
