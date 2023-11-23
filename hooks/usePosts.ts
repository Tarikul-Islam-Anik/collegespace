import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { PostType } from '@/lib/type';

const usePosts = () => {
  const endpoint = '/api/posts';
  const {
    data: posts,
    error,
    isLoading,
    mutate,
  } = useSWR<PostType[]>(endpoint, fetcher);

  return {
    posts,
    error,
    isLoading,
    mutate,
  };
};

export default usePosts;
