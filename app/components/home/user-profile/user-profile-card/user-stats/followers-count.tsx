import { Button } from '@/components/ui/button';
import { Text } from '@/components/typography/text';
import FollowerDialog from '@/components/shared/follow/follower-dialog';

const FollowersCount = ({ id, count }: { id: string; count: number }) => {
  return (
    <FollowerDialog id={id}>
      <Button variant='ghost' className='w-full justify-between  rounded-none'>
        <Text size='sm' className='text-muted-foreground'>
          Followers
        </Text>
        <Text size='sm' className='text-primary' weight='medium'>
          {count}
        </Text>
      </Button>
    </FollowerDialog>
  );
};

FollowersCount.displayName = 'FollowersCount';
export default FollowersCount;
