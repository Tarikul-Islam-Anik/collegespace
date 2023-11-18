'use client';
import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { PostType } from '@/lib/type';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import PostContent from '@/components/shared/posts/post-content';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { HandleLike, HandleReply, HandleRepost } from './item-actions';

const PostItem = ({ post }: { post: PostType }) => {
  const router = useRouter();

  const postContent = useMemo(
    () => <PostContent post={post} profileHover />,
    [post.content]
  );

  const commentPlaceholder = useMemo(
    () => <PostContent post={post} />,
    [post.content]
  );

  const totalLikes = post._count.likes;
  const totalReplies = post._count.replies;

  const goToPost = useCallback(() => {
    router.push(`/post/${post.id}`);
  }, [router, post.id]);

  return (
    <Card className='rounded-none border-none pt-5 shadow-none'>
      <CardContent className='pb-2 pl-0'>{postContent}</CardContent>
      <CardFooter className='border-b pb-4 pl-14'>
        <Flex align='center' justify='between' width='full'>
          <Box onClick={goToPost} className='cursor-pointer'>
            <Text as='p' className='text-muted-foreground' size='xs'>
              <Text className='hover:opacity-75'>
                {totalLikes} like{totalLikes > 1 && 's'}
              </Text>
              <Text className='mx-1'>&middot;</Text>
              <Text className='hover:opacity-75'>
                {totalReplies} repl{totalReplies > 1 ? 'ies' : 'y'}
              </Text>
            </Text>
          </Box>
          <Flex>
            <HandleLike postId={post.id} />
            <HandleRepost postId={post.id} />
            <HandleReply postId={post.id} postContent={commentPlaceholder} />
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
};

PostItem.displayName = 'PostItem';
export default PostItem;
