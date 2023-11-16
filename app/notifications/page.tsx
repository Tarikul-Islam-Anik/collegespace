'use client';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import Loader from '@/components/shared/loader';
import { Text } from '@/components/typography/text';
import useNotifications from '@/hooks/useNotifications';
import { InboxIcon } from 'lucide-react';

const NotificationsPage = () => {
  const { notifications, isLoading } = useNotifications();

  return (
    <Flex justify='center' align='center' mt={8}>
      <Box />
      <Box>
        {isLoading ? (
          <Loader />
        ) : notifications?.length === 0 ? (
          <Flex
            align='center'
            gap={2}
            justify='center'
            className='h-[calc(100vh-20vh)] text-muted-foreground'
            direction='column'
          >
            <InboxIcon size={32} />
            <Text weight='medium' size='sm'>
              No notifications
            </Text>
          </Flex>
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
