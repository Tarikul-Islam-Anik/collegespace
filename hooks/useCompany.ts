import useSWR from 'swr';
import { CompanyType } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useCompany = (id: string) => {
  const {
    data: company,
    error,
    isLoading,
    mutate,
  } = useSWR<CompanyType>('api/company/' + id, fetcher);

  return {
    company,
    error,
    isLoading,
    mutate,
  };
};

export default useCompany;
