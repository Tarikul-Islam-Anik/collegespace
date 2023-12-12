import useSWR from 'swr';
import { BountyType } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useBounty = (user?: boolean) => {
  const endPoint = user ? `/api/bounty/user` : '/api/bounty/all';

  const {
    data: bounties,
    error,
    isLoading,
    mutate,
  } = useSWR<BountyType[]>(endPoint, fetcher);

  return {
    bounties,
    error,
    isLoading,
    mutate,
  };
};

export default useBounty;
