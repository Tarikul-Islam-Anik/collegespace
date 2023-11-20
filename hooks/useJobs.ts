import useSWR from 'swr';
import { JobType } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useJobs = (companyId?: string) => {
  const { data, error, isLoading, mutate } = useSWR<{ jobs: JobType[] }>(
    companyId ? `/api/jobs/${companyId}` : '/api/jobs',
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
