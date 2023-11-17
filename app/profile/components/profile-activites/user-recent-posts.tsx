'use client';

import PostItem from '@/components/shared/posts/post-item';
import { PostType } from '@/lib/type';
import useUserPosts from '@/hooks/useUserPosts';
import EmptyState from '@/components/shared/empty-state';
import { MessageEdit } from 'iconsax-react';
import Loader from '@/components/shared/loader';

const UserRecentPosts = ({ email }: { email: string }) => {
  const { recentPosts, isLoading } = useUserPosts(email);

  if (isLoading) {
    return <Loader className='h-96' />;
  }

  return recentPosts?.length === 0 ? (
    <EmptyState
      icon={<MessageEdit size={32} />}
      title='No posts'
      description='Not posted anything yet.'
    />
  ) : (
    <ul role='recent-post-list'>
      {recentPosts?.map((post: PostType) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};

UserRecentPosts.displayName = 'UserRecentPosts';
export default UserRecentPosts;
