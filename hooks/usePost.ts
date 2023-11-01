import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { Post } from '@/lib/type';

const usePost = (postId: string) => {
  const { data, error, isLoading, mutate } = useSWR<Post>(
    postId ? `/api/posts/${postId}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePost;
