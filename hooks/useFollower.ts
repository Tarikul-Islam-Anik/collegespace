import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

type Follow = {
  followers: {
    id: string;
    name: string;
    username: string;
    image: string;
  }[];
  follows: {
    id: string;
    name: string;
    username: string;
    image: string;
  }[];
};

const useFollower = (id: string) => {
  const endpoint = '/api/users/follow/' + id;
  const { data, error, isLoading, mutate } = useSWR<Follow>(endpoint, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useFollower;
