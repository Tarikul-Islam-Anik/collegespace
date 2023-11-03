'use client';

import { useAtom } from 'jotai/react';
import { PostsAtom } from '@/lib/atom';
import usePosts from '@/hooks/usePosts';
import PostItem from './post-item';
import Loading from '@/components/shared/loader';

const Posts = () => {
  const { data = [], isLoading } = usePosts();
  const [posts, setPosts] = useAtom(PostsAtom);

  if (isLoading) return <Loading />;
  else {
    setPosts(data);
    return (
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <PostItem {...post} />
          </li>
        ))}
      </ul>
    );
  }
};

Posts.displayName = 'Posts';
export default Posts;
