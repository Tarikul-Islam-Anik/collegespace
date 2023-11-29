'use client';

import { PostType } from '@/lib/type';
import usePosts from '@/hooks/usePosts';
import PostItem from './post-item';
import Loading from '@/components/shared/loader';
import { Text } from '@/components/typography/text';
import { Separator } from '@/components/ui/separator';

const Posts = () => {
  const { data, isLoading } = usePosts('all');
  const posts = data as unknown as PostType[];

  if (isLoading) return <Loading />;
  else if (posts?.length === 0)
    return (
      <Text size='sm' align='center' color='muted-foreground' className='mt-8'>
        No posts found.
      </Text>
    );
  else {
    return (
      <ul role='post-feed'>
        {posts?.map((post, index) => (
          <li key={post.id}>
            <PostItem post={post} />
            {index !== posts.length && <Separator className='mb-8 mt-4' />}
          </li>
        ))}
      </ul>
    );
  }
};

Posts.displayName = 'Posts';
export default Posts;
