'use client';

import { ReplyType } from '@/lib/type';
import usePost from '@/hooks/usePost';
import { Flex } from '@/components/layout/flex';
import Loader from '@/components/shared/loader';
import { Separator } from '@/components/ui/separator';
import { Container } from '@/components/layout/container';
import PostItem from '@/components/shared/posts/post-item';
import ReplyItem from '@/components/shared/posts/reply/reply-item';
import { Box } from '@/components/layout/box';

export default function Page({ params }: { params: { postId: string } }) {
  const { data: post, isLoading } = usePost(params.postId);
  const replies = post ? post?.replies : [];

  if (isLoading) return <Loader className='h-96' />;

  return (
    <Box mx='auto' className='w-[550px]'>
      <Container>
        <Flex direction='column' mx='auto'>
          {post && <PostItem post={post} />}
          <ul role='reply-list'>
            {replies.map((reply: ReplyType, index) => (
              <li key={reply.id}>
                {index !== 0 && <Separator />}
                <ReplyItem
                  id={reply.id}
                  content={reply.content}
                  createdAt={reply.createdAt}
                  user={reply.user}
                />
              </li>
            ))}
          </ul>
        </Flex>
      </Container>
    </Box>
  );
}
