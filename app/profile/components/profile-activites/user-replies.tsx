'use client';

import { PostType } from '@/lib/type';
import usePosts from '@/hooks/usePosts';
import { Messages3 } from 'iconsax-react';
import Loader from '@/components/shared/loader';
import EmptyState from '@/components/shared/empty-state';
import { Separator } from '@/components/ui/separator';
import useUser from '@/hooks/useUser';
import RepliedPostItem from '@/components/shared/posts/replied-post-item';

const UserReplies = ({ email }: { email: string }) => {
  const { data, isLoading } = usePosts(email, 'replies');
  const { user } = useUser(email);

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
      {repliedPosts?.map((post, index) => (
        <>
          <li key={post.id}>
            {user && <RepliedPostItem post={post} user={user} />}
            {index !== repliedPosts.length && (
              <Separator className='mb-6 mt-4' />
            )}
          </li>
        </>
      ))}
    </ul>
  );
};

UserReplies.displayName = 'UserReplies';
export default UserReplies;
