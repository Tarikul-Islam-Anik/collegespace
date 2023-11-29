import useSWR from 'swr';
import { UserType } from '@/lib/type';
import fetcher from '@/lib/fetcher';
import { useSession } from 'next-auth/react';

const useStudentDetails = (email?: string) => {
  const { data: session } = useSession();
  const studentEmail = email || session?.user?.email;

  const { data, error, isLoading, mutate } = useSWR<UserType>(
    `/api/student-details/${studentEmail}`,
    fetcher
  );

  return { data, error, isLoading, mutate };
};

export default useStudentDetails;
