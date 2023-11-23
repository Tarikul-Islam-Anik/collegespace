'use client';

import usePosts from '@/hooks/usePosts';
import PostItem from './post-item';
import Loading from '@/components/shared/loader';
import { Text } from '@/components/typography/text';

const Posts = () => {
  const { posts = [], isLoading } = usePosts();

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
        {posts?.map((post) => (
          <li key={post.id}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    );
  }
};

Posts.displayName = 'Posts';
export default Posts;
