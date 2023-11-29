import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { Notification } from '@/lib/type';

const useNotifications = () => {
  const endpoint = '/api/notifications';
  const {
    data: notifications,
    error,
    isLoading,
    mutate,
  } = useSWR<Notification[]>(endpoint, fetcher);

  return {
    notifications,
    error,
    isLoading,
    mutate,
  };
};

export default useNotifications;
