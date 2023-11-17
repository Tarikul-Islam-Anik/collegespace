import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { PostType } from '@/lib/type';

type RecentPostsType = {
  posts: PostType[];
};

const useUserPosts = (email?: string) => {
  const endpoint = `/api/posts/recent/${email}`;

  const { data, error, isLoading, mutate } = useSWR<RecentPostsType>(
    endpoint,
    fetcher
  );

  const recentPosts = data?.posts;

  return {
    recentPosts,
    error,
    isLoading,
    mutate,
  };
};

export default useUserPosts;
