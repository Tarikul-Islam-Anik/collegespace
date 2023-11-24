import useSWR from 'swr';
import { CompanyType } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useCompany = (id?: string) => {
  const endpoint = 'api/company' + (id ? '/' + id : '');
  const {
    data: company,
    error,
    isLoading,
    mutate,
  } = useSWR<CompanyType>(endpoint, fetcher);

  return {
    company,
    error,
    isLoading,
    mutate,
  };
};

export default useCompany;
