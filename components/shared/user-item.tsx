'use client';

import { UserType } from '@/lib/type';
import { buttonVariants } from '../ui/button';
import { Flex } from '@/components/layout/flex';
import FollowButton from './follow/follow-button';
import ProfileHoverCard from './profile-hover-card';
import { Text } from '@/components/typography/text';
import UserAvatar from '@/components/shared/user-avatar';
import { cn } from '@/lib/utils';

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
    content
  );

  return (
    <Flex
      justify='between'
      align='center'
      width='full'
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'h-auto justify-start p-2'
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
