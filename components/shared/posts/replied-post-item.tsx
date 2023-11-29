import PostContent from '@/components/shared/posts/post-content';
import { Flex } from '@/components/layout/flex';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/typography/text';
import { Heading } from '@/components/typography/heading';
import UserAvatar from '@/components/shared/user-avatar';
import { formatDistanceToNowStrict } from 'date-fns';
import { PostType, UserType } from '@/lib/type';

interface RepliedPostItemProps {
  post: PostType;
  user: UserType;
}

const RepliedPostItem = ({ post, user }: RepliedPostItemProps) => {
  return (
    <Flex direction='column'>
      <PostContent post={post} profileHover hideOption />
      <Separator
        orientation='vertical'
        className='my-3 ml-5 h-auto w-0.5 py-2'
      />
      <Flex className='gap-3'>
        <UserAvatar name={user?.name} image={user?.image} />
        <Flex direction='column'>
          <Flex gap={2} align='center'>
            <Heading as='h3' weight='semibold' size='sm'>
              {user?.name}
            </Heading>
            <Text>&middot;</Text>
            <time
              className='text-xs text-muted-foreground'
              dateTime={new Date(post?.replies[0]?.createdAt).toISOString()}
            >
              {formatDistanceToNowStrict(
                new Date(post?.replies[0]?.createdAt),
                {
                  addSuffix: true,
                }
              )}
            </time>
          </Flex>
          <Text as='p'>{post?.replies[0]?.content}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RepliedPostItem;
