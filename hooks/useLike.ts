import { useCallback, useMemo } from 'react';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import usePosts from './usePosts';

type LikeResponse = {
  liked: boolean;
};

const useLike = (postId: string) => {
  const endpoint = `/api/posts/like/${postId}`;
  const { data, isLoading, mutate } = useSWR<LikeResponse>(
    postId ? endpoint : null,
    fetcher
  );

  const { mutate: mutatePost } = usePosts(postId, 'single');
  const { mutate: mutatePosts } = usePosts(postId, 'all');

  const liked = useMemo(() => {
    return data?.liked;
  }, [data]);

  const toggleLike = useCallback(async () => {
    if (!liked)
      await fetch(endpoint, {
        method: 'POST',
      });
    else await fetch(endpoint, { method: 'DELETE' });
    mutate();
    mutatePost();
    mutatePosts();
  }, [postId, liked]);

  return { liked, toggleLike, isLoading };
};

export default useLike;
