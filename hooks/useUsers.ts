import useSWR from 'swr';
import { UserType } from '@/lib/type';
import fetcher from '@/lib/fetcher';
import { useSession } from 'next-auth/react';
import useFollower from './useFollower';

const useUsers = () => {
  const { data: session } = useSession();
  const { data, error, isLoading, mutate } = useSWR<UserType[]>(
    `/api/users`,
    fetcher
  );

  // @ts-ignore
  const currentUserId = session?.user?.id;

  const { data: following } = useFollower(currentUserId);

  const users = data?.filter(
    (user) =>
      session &&
      user.email !== session?.user?.email &&
      following?.follows?.some((follow) => follow.id === currentUserId)
  );

  return {
    users,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
