import useSWR from 'swr';
import { User } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useApplicants = (
  reference: string,
  applicantsFrom: 'jobs' | 'bounty'
) => {
  const endPoint =
    applicantsFrom === 'jobs'
      ? `/api/company/jobs/applicants/${reference}`
      : `/api/bounty/applicants/${reference}`;

  const {
    data: applicants,
    error,
    isLoading,
    mutate,
  } = useSWR<Partial<User[]>>(endPoint, fetcher);

  return {
    applicants,
    error,
    isLoading,
    mutate,
  };
};

export default useApplicants;
