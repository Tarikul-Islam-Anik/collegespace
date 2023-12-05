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
  } = useSWR<UserType>(userEmail ? `/api/users/${userEmail}` : null, fetcher);

  return {
    user,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
