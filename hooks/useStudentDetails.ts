import useSWR from 'swr';
import { UserType } from '@/lib/type';
import fetcher from '@/lib/fetcher';

const useStudentDetails = (email?: string) => {
  const studentEmail = email || 'currentUser'

  const { data, error, isLoading, mutate } = useSWR<UserType>(
    `/api/student-details/${studentEmail}`,
    fetcher
  );

  return { data, error, isLoading, mutate };
};

export default useStudentDetails;
