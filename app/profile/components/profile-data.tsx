'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import useUser from '@/hooks/useUser';
import { Box } from '@/components/layout/box';
import { Badge } from '@/components/ui/badge';
import { Flex } from '@/components/layout/flex';
import { Skeleton } from '@/components/ui/skeleton';
import { Text } from '@/components/typography/text';
import UserAvatar from '@/components/shared/user-avatar';
import { Heading } from '@/components/typography/heading';
import { Button, buttonVariants } from '@/components/ui/button';
import FollowerDialog from '@/components/shared/follow/follower-dialog';

const ProfileData = ({ email }: { email: string }) => {
  const { user, isLoading } = useUser(email);
  const { data: session } = useSession();
  return (
    <>
      <Flex align='center' justify='between' width='full'>
        <Box>
          {isLoading ? (
            <Skeleton className='h-8 w-[200px]' />
          ) : (
            <Heading size='2xl' weight='bold'>
              {user?.name}
            </Heading>
          )}
          {isLoading ? (
            <Skeleton className='mt-1.5 h-6 w-[200px]' />
          ) : (
            <Flex gap={2} align='center'>
              <Text as='p'>@{user?.username}</Text>
              <Badge variant='secondary' className='capitalize'>
                {user?.role}
              </Badge>
            </Flex>
          )}
        </Box>
        <UserAvatar
          image={user?.image}
          name={user?.name}
          className='h-20 w-20'
        />
      </Flex>
      <Box>
        {isLoading ? (
          <Skeleton className='h-8 w-[200px]' />
        ) : (
          <>
            <Heading as='h3' size='sm' color='muted-foreground' weight='medium'>
              Bio
            </Heading>
            <Text as='p' size='sm'>
              {user?.bio}
            </Text>
          </>
        )}
      </Box>
      <Box>
        {isLoading ? (
          <Skeleton className='h-6 w-[200px]' />
        ) : (
          <Box className='text-sm text-muted-foreground'>
            <FollowerDialog id={user?.id!}>
              <Text className='cursor-pointer underline-offset-2 hover:underline'>
                {new Intl.NumberFormat('en-US', {
                  notation: 'compact',
                  compactDisplay: 'short',
                }).format(user?._count.followers!)}{' '}
                Followers
              </Text>
            </FollowerDialog>
            {user?.createdAt && (
              <>
                <Text size='xs' className='mx-1.5 opacity-50'>
                  &bull;
                </Text>
                <Text>
                  Joined {format(new Date(user?.createdAt), 'dd MMMM, yyyy')}
                </Text>
              </>
            )}
          </Box>
        )}
      </Box>
      {session?.user?.email === email.replaceAll('%40', '@') ? (
        <Link
          href='/settings'
          className={buttonVariants({ variant: 'outline' }) + ' w-full'}
        >
          Edit Profile
        </Link>
      ) : (
        // {user?.isFollowing ? 'Unfollow' : 'Follow
        <Button className='w-full'>Follow</Button>
      )}
    </>
  );
};

ProfileData.displayName = 'ProfileData';
export default ProfileData;
