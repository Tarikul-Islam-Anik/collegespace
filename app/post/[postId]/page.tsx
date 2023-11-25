'use client';

import { ReplyType } from '@/lib/type';
import usePosts from '@/hooks/usePosts';
import { Flex } from '@/components/layout/flex';
import Loader from '@/components/shared/loader';
import { Separator } from '@/components/ui/separator';
import PostItem from '@/components/shared/posts/post-item';
import ReplyItem from '@/components/shared/posts/reply/reply-item';

export default function PostPage({ params }: { params: { postId: string } }) {
  const { data, isLoading } = usePosts(params.postId, 'single');
  const replies = data ? data?.replies : [];

  if (isLoading) return <Loader className='h-[80vh]' />;

  return (
    <Flex direction='column' mx='auto'>
      {data && <PostItem post={data} />}
      <Separator className='mt-4' />
      <ul role='reply-list'>
        {replies.map((reply: ReplyType, index) => (
          <li key={reply.id}>
            <ReplyItem
              id={reply.id}
              content={reply.content}
              createdAt={reply.createdAt}
              user={reply.user}
            />
            {index !== replies.length && <Separator />}
          </li>
        ))}
      </ul>
    </Flex>
  );
}
