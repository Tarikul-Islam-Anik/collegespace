import axios from 'axios';
import { useCallback, useMemo } from 'react';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

type LikeResponse = {
  liked: boolean;
};

const useLike = (postId: string) => {
  const endpoint = `/api/like`;
  const { data, isLoading, mutate } = useSWR<LikeResponse>(
    postId ? `${endpoint}/${postId}` : null,
    fetcher
  );

  const liked = useMemo(() => {
    return data?.liked;
  }, [data]);

  const toggleLike = useCallback(async () => {
    if (!liked) await axios.post<LikeResponse>(endpoint, { id: postId });
    else await axios.delete<LikeResponse>(endpoint, { data: { id: postId } });
    mutate();
  }, [postId, liked]);

  return { liked, toggleLike, isLoading };
};

export default useLike;
