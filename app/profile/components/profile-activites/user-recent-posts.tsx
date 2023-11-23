'use client';

import { PostType } from '@/lib/type';
import usePosts from '@/hooks/usePosts';
import { MessageEdit } from 'iconsax-react';
import PostItem from '@/components/shared/posts/post-item';
import EmptyState from '@/components/shared/empty-state';
import Loader from '@/components/shared/loader';

const UserRecentPosts = ({ email }: { email: string }) => {
  const { data, isLoading } = usePosts(email, 'recent');
  const posts = data as unknown as PostType[];

  if (isLoading) {
    return <Loader className='h-96' />;
  }

  return posts?.length === 0 ? (
    <EmptyState
      icon={<MessageEdit size={32} />}
      title='No posts'
      description='Not posted anything yet.'
    />
  ) : (
    <ul role='recent-post-list'>
      {posts?.map((post: PostType) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};

UserRecentPosts.displayName = 'UserRecentPosts';
export default UserRecentPosts;
