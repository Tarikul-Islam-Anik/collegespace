import useSWR from 'swr';
import { JobType } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useJobs = (reference?: string) => {
  const endPoint = reference
    ? `/api/company/jobs/${reference}`
    : '/api/company/jobs';

  const { data, error, isLoading, mutate } = useSWR<{ jobs: JobType[] }>(
    endPoint,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useJobs;
