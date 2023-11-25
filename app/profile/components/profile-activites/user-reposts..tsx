'use client';

import { Repeat } from 'iconsax-react';
import usePosts from '@/hooks/usePosts';
import Loader from '@/components/shared/loader';
import EmptyState from '@/components/shared/empty-state';
import PostItem from '@/components/shared/posts/post-item';
import { RepostType } from '@/lib/type';
import { Separator } from '@/components/ui/separator';

const UserReposts = ({ email }: { email: string }) => {
  const { data, isLoading } = usePosts(email, 'repost');
  const reposts = data as unknown as RepostType[];

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
      {reposts?.map((repost, index) => (
        <li key={repost.postId}>
          <PostItem post={repost.post} />
          {index !== reposts.length && <Separator className='mb-6 mt-4' />}
        </li>
      ))}
    </ul>
  );
};

UserReposts.displayName = 'UserReposts';
export default UserReposts;
