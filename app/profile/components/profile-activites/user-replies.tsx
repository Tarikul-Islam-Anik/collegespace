'use client';

import { PostType } from '@/lib/type';
import usePosts from '@/hooks/usePosts';
import { Messages3 } from 'iconsax-react';
import Loader from '@/components/shared/loader';
import EmptyState from '@/components/shared/empty-state';

const UserReplies = ({ email }: { email: string }) => {
  const { data, isLoading } = usePosts(email, 'replies');

  const repliedPosts = data as unknown as PostType[];

  if (isLoading) {
    return <Loader className='h-96' />;
  }

  return repliedPosts?.length === 0 ? (
    <EmptyState
      icon={<Messages3 size={32} />}
      title='No replies'
      description='Not replied to any posts.'
    />
  ) : (
    <ul role='user-replies'>
      {repliedPosts?.map((post) => (
        <li key={post.id}>
          <p>{post.replies[0].content}</p>
        </li>
      ))}
    </ul>
  );
};

UserReplies.displayName = 'UserReplies';
export default UserReplies;
