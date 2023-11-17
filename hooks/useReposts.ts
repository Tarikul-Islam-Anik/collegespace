import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { RepostType } from '@/lib/type';

const useReposts = (email: string) => {
  const { data, error, isLoading, mutate } = useSWR<RepostType[]>(
    email ? `/api/posts/repost/${email}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useReposts;
