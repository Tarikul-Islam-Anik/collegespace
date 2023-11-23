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

const pluralize = (count: number, noun: string, suffix = 's') => {
  if (noun === 'repl') return `${count} ${noun}${count !== 1 ? 'ies' : 'y'}`;
  else return `${count} ${noun}${count !== 1 ? suffix : ''}`;
};

const PostItem = ({ post }: { post: PostType }) => {
  const router = useRouter();

  const postContent = useMemo(
    () => <PostContent post={post} profileHover />,
    [post]
  );

  const commentPlaceholder = useMemo(() => <PostContent post={post} />, [post]);

  const matrics = useMemo(
    () => ({
      like: post._count.likes,
      repl: post._count.replies,
      repost: post._count.reposts,
    }),
    [post._count.likes, post._count.replies, post._count.reposts]
  );

  const goToPost = useCallback(() => {
    router.push(`/post/${post.id}`);
  }, [router, post]);

  return (
    <Card className='rounded-none border-none pt-5 shadow-none'>
      <CardContent className='pb-2 pl-0'>{postContent}</CardContent>
      <CardFooter className='border-b pb-4 pl-14'>
        <Flex align='center' justify='between' width='full'>
          <Box onClick={goToPost} className='cursor-pointer'>
            <Text as='p' className='text-muted-foreground' size='xs'>
              {Object.keys(matrics).map((key, index) => (
                <>
                  {index !== 0 && <Text className='mx-1'>&middot;</Text>}
                  <Text key={key} className='hover:opacity-75'>
                    {pluralize(matrics[key as keyof typeof matrics], key)}
                  </Text>
                </>
              ))}
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
