import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { PostType } from '@/lib/type';

const usePost = (postId: string) => {
  const { data, error, isLoading, mutate } = useSWR<PostType>(
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
