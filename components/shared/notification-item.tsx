import { Button } from '@/components/ui/button';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';

interface NotificationType {
  content: string;
}

const NotificationItem = ({ content }: NotificationType) => {
  return (
    <Flex align='center' justify='between' my={4}>
      <Text>{content}</Text>
      {content.includes('following') && (
        <Button size='sm' variant='outline'>
          Follow back
        </Button>
      )}
      {content.includes('job') && (
        <Button size='sm' variant='outline'>
          View CV
        </Button>
      )}
    </Flex>
  );
};

export default NotificationItem;
