'use client';

import { Repeat } from 'iconsax-react';
import useReposts from '@/hooks/useReposts';
import Loader from '@/components/shared/loader';
import EmptyState from '@/components/shared/empty-state';
import PostItem from '@/components/shared/posts/post-item';

const UserReposts = ({ email }: { email: string }) => {
  const { data: reposts, isLoading } = useReposts(email);

  if (isLoading) {
    return <Loader className='h-96' />;
  }

  return reposts?.length === 0 ? (
    <EmptyState
      icon={<Repeat size={32} />}
      title='No reposts'
      description='All the reposts will show up here.'
    />
  ) : (
    <ul role='user-replies'>
      {reposts?.map((repost) => (
        <li key={repost.postId}>
          <PostItem post={repost.post} />
        </li>
      ))}
    </ul>
  );
};

UserReposts.displayName = 'UserReposts';
export default UserReposts;
