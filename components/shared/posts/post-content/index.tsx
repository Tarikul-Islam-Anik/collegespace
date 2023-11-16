'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { PostType } from '@/lib/type';
import PostOptions from './post-options';
import UserAvatar from '@/components/shared/user-avatar';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { formatDistanceToNowStrict } from 'date-fns';

const ProfileHoverCard = dynamic(
  () => import('@/components/shared/profile-hover-card'),
  { ssr: false }
);

const PostContent = ({ post }: { post: PostType }) => {
  const { id, content, user, createdAt, userId } = post;

  const postedAt = useMemo(() => {
    return formatDistanceToNowStrict(new Date(createdAt), {
      addSuffix: true,
    });
  }, [createdAt]);

  return (
    <Flex className='gap-3'>
      <UserAvatar name={user?.name} image={user?.image} />
      <Flex direction='column' className='-mt-3' width='full'>
        <Flex align='center' justify='between'>
          <Text>
            <ProfileHoverCard {...user}>
              <Text className='font-semibold'>{user?.name}</Text>
            </ProfileHoverCard>
            <Text className='mx-2'>&middot;</Text>
            <time
              dateTime={new Date(createdAt).toISOString()}
              className='text-xs'
            >
              {postedAt}
            </time>
          </Text>
          <PostOptions postId={id} userId={userId} />
        </Flex>
        <Text as='p'>{content}</Text>
      </Flex>
    </Flex>
  );
};

PostContent.displayName = 'PostContent';
export default PostContent;
