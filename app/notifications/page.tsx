'use client';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import EmptyState from '@/components/shared/empty-state';
import Loader from '@/components/shared/loader';
import useNotifications from '@/hooks/useNotifications';
import { InboxIcon } from 'lucide-react';

const NotificationsPage = () => {
  const { notifications, isLoading } = useNotifications();

  if (isLoading) {
    return <Loader className='h-screen' />;
  }

  return (
    <Flex justify='center' align='center'>
      <Box />
      <Box>
        {notifications?.length === 0 ? (
          <EmptyState
            icon={<InboxIcon size={32} />}
            title='No notifications'
            description='Notifications inbox is empty.'
          />
        ) : (
          <ul className='w-[500px] gap-4'>
            {notifications?.map((notification, index) => (
              <li key={index}>{notification.content}</li>
            ))}
          </ul>
        )}
      </Box>
      <Box />
    </Flex>
  );
};

export default NotificationsPage;
