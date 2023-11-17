import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { PostType, Reply } from '@/lib/type';

const useRepliedPosts = (email: string) => {
  const { data, error, isLoading, mutate } = useSWR<PostType[]>(
    email ? `/api/reply/${email}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useRepliedPosts;
