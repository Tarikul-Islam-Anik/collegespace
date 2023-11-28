'use client';
import useUser from '@/hooks/useUser';
import { Flex } from '@/components/layout/flex';
import Counts from './counts';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import dynamic from 'next/dynamic';
import Loader from '@/components/shared/loader';

const FollowingDialog = dynamic(
  () => import('@/components/shared/follow/follower-dialog'),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

const FollowCounts = () => {
  const { user } = useUser();

  const FollowPlaceholder = ({
    follower,
    following,
  }: {
    follower?: number;
    following?: number;
  }) => {
    return (
      <Flex justify='center' align='center' gap={8} p={2}>
        <Counts label='Followers' count={follower} />
        <Separator orientation='vertical' className='h-8' />
        <Counts label='Following' count={following} />
      </Flex>
    );
  };

  return (
    <Flex justify='center' align='center' className='h-16'>
      {user ? (
        <FollowingDialog id={user?.id}>
          <Button
            variant='ghost'
            className='h-full w-full items-center justify-center rounded-none'
          >
            <FollowPlaceholder
              follower={user?._count?.followers}
              following={user?._count?.follows}
            />
          </Button>
        </FollowingDialog>
      ) : (
        <FollowPlaceholder />
      )}
    </Flex>
  );
};

FollowCounts.displayName = 'FollowCounts';
export default FollowCounts;
