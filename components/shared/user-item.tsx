'use client';

import dynamic from 'next/dynamic';
import { UserType } from '@/lib/type';
import { buttonVariants } from '../ui/button';
import { Flex } from '@/components/layout/flex';
import FollowButton from './follow/follow-button';
import { Text } from '@/components/typography/text';
import UserAvatar from '@/components/shared/user-avatar';
import { cn } from '@/lib/utils';
import { Box } from '../layout/box';
import Link from 'next/link';

const ProfileHoverCard = dynamic(() => import('./profile-hover-card'), {
  ssr: false,
});

interface UserItemProps {
  user: Partial<UserType>;
  profileHover?: boolean;
  followButton?: boolean;
}

const UserItem = ({ user, profileHover, followButton }: UserItemProps) => {
  const name = user?.name;
  const image = user?.image;
  const username = user?.username ? `@${user?.username}` : 'no username';

  const content = (
    <>
      <Text className='text-sm font-semibold'>{name}</Text>
      <Text
        weight='medium'
        className='line-clamp-1 text-left text-xs text-muted-foreground'
      >
        {username}
      </Text>
    </>
  );

  const avatar = <UserAvatar name={name} image={image} />;

  const card = profileHover ? (
    <ProfileHoverCard {...user}>{content}</ProfileHoverCard>
  ) : (
    <Link href={`/profile/${user?.email}`} passHref className='w-full'>
      {content}
    </Link>
  );

  return (
    <Flex
      align='center'
      width='full'
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'h-auto justify-between p-2'
      )}
    >
      <Flex gap={2} align='center'>
        {avatar}
        <Flex direction='column' justify='center' className='ml-0.5'>
          {card}
        </Flex>
      </Flex>
      {followButton && <FollowButton userId={user?.id!} />}
    </Flex>
  );
};

UserItem.displayName = 'UserItem';
export default UserItem;
