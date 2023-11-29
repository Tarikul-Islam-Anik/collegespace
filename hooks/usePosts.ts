import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { PostType } from '@/lib/type';

const usePosts = (
  reference?: string,
  postType: 'recent' | 'replies' | 'single' | 'repost' | 'all' = 'all'
) => {
  const endpoint =
    postType === 'single' && reference
      ? `/api/posts/${reference}`
      : postType === 'recent' && reference
      ? `/api/posts/recent/${reference}`
      : postType === 'replies' && reference
      ? `/api/posts/reply/${reference}`
      : postType === 'repost' && reference
      ? `/api/posts/repost/${reference}`
      : '/api/posts';

  const { data, error, isLoading, mutate } = useSWR<PostType>(
    endpoint,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePosts;
