'use client';

import { useAtom } from 'jotai/react';
import { PostsAtom } from '@/lib/atom';
import usePosts from '@/hooks/usePosts';
import PostItem from './post-item';
import Loading from '@/components/shared/loader';
import { Text } from '@/components/typography/text';

const Posts = () => {
  const { data = [], isLoading } = usePosts();
  const [posts, setPosts] = useAtom(PostsAtom);

  if (isLoading) return <Loading />;
  else if (posts?.length === 0)
    return (
      <Text size='sm' align='center' color='muted-foreground' className='mt-8'>
        No posts found.
      </Text>
    );
  else {
    setPosts(data);
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
