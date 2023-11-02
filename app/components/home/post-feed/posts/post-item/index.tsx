import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { formatDistanceToNowStrict } from 'date-fns';
import { PostType } from '@/lib/type';
import { Flex, Text } from '@radix-ui/themes';
import PostActions from './item-actions';
import PostOptions from './item-options';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import UserAvatar from '@/components/shared/user-avatar';

const ProfileHoverCard = dynamic(
  () => import('@/components/shared/profile-hover-card'),
  { ssr: false }
);

const PostItem = ({ id, type, content, user, likes, createdAt }: PostType) => {
  const postedAt = useMemo(() => {
    return formatDistanceToNowStrict(new Date(createdAt), {
      addSuffix: true,
    });
  }, [createdAt]);
  
  return (
    <Card className='rounded-none border-none pt-5 shadow-none'>
      <CardContent className='pb-2 pl-0'>
        <Flex gap='3'>
          <UserAvatar name={user?.name} image={user?.image} />
          <Flex direction='column' mt='-3' width='100%'>
            <Flex align='center' justify='between'>
              <Text as='p'>
                <ProfileHoverCard {...user}>
                  <Text className='font-semibold'>{user?.name}</Text>
                </ProfileHoverCard>
                <Text mx='2'>&middot;</Text>
                <time
                  dateTime={new Date(createdAt).toISOString()}
                  className='text-xs'
                >
                  {postedAt}
                </time>
              </Text>
              <PostOptions postId={id} />
            </Flex>
            <Text as='p'>{content}</Text>
          </Flex>
        </Flex>
      </CardContent>
      <CardFooter className='border-b pb-4 pl-14'>
        <Flex align='center' justify='between' width='100%'>
          <Text as='p' className='text-muted-foreground' size='1'>
            {likes.length} like{likes.length > 1 && 's'}
            &middot; 2 comments
          </Text>
          <PostActions postId={id} />
        </Flex>
      </CardFooter>
    </Card>
  );
};

PostItem.displayName = 'PostItem';
export default PostItem;
