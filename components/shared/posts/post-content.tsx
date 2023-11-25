'use client';

import { memo, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { PostType } from '@/lib/type';
import PostOptions from './post-options';
import UserAvatar from '@/components/shared/user-avatar';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { formatDistanceToNowStrict } from 'date-fns';
import { LampOn, MessageQuestion } from 'iconsax-react';
import { Heading } from '@/components/typography/heading';

const ProfileHoverCard = dynamic(
  () => import('@/components/shared/profile-hover-card'),
  { ssr: false }
);

interface PostContentProps {
  post: PostType;
  profileHover?: boolean;
  hideOption?: boolean;
}

const PostContent = memo<PostContentProps>(
  ({ post, profileHover, hideOption }) => {
    const { id, content, user, createdAt, userId } = post;

    const postedAt = useMemo(() => {
      return formatDistanceToNowStrict(new Date(createdAt), {
        addSuffix: true,
      });
    }, [createdAt]);

    const name = (
      <Heading as='h3' weight='semibold'>
        {user?.name}
      </Heading>
    );

    const profile = profileHover ? (
      <ProfileHoverCard {...user}>{name}</ProfileHoverCard>
    ) : (
      name
    );

    const postType = (
      <Flex align='center' className='gap-1 text-muted-foreground'>
        {post.type === 'question' ? (
          <MessageQuestion variant='Bold' size={12} />
        ) : (
          <LampOn variant='Bold' size={12} />
        )}
        <Text size='xs' weight='medium'>
          {post.type === 'question' ? 'Asked a Question' : 'Shared a thought'}
        </Text>
      </Flex>
    );

    return (
      <Flex className='gap-3'>
        <UserAvatar name={user?.name} image={user?.image} />
        <Flex direction='column' className='-mt-3' width='full'>
          <Flex align='center' justify='between'>
            <Flex align='center' gap={2}>
              {profile}
              {postType}
              <Text>&middot;</Text>
              <time
                dateTime={new Date(createdAt).toISOString()}
                className='text-xs text-muted-foreground'
              >
                {postedAt}
              </time>
            </Flex>
            {!hideOption && <PostOptions postId={id} userId={userId} />}
          </Flex>
          <Text as='p'>{content}</Text>
        </Flex>
      </Flex>
    );
  }
);

PostContent.displayName = 'PostContent';
export default PostContent;
