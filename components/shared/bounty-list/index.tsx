'use client';
import BountyItem from './bounty-item';
import useBounty from '@/hooks/useBounty';
import { Separator } from '@/components/ui/separator';
import EmptyState from '../empty-state';
import { Crown } from 'iconsax-react';
import Loader from '../loader';

const BountyList = ({ currentUser }: { currentUser?: boolean }) => {
  const { bounties, isLoading } = useBounty(currentUser ? true : false);

  if (isLoading) return <Loader className='h-96' />;

  return bounties?.length ? (
    <ul role='list'>
      {bounties?.map((bounty, index) => (
        <li key={index} className='w-full'>
          <BountyItem bounty={bounty} />
          {index !== bounties.length - 1 && <Separator className='my-4' />}
        </li>
      ))}
    </ul>
  ) : (
    <EmptyState
      title='No bounties yet'
      description='No bounties to show'
      icon={<Crown className='h-12 w-12' />}
    />
  );
};

BountyList.displayName = 'BountyList';
export default BountyList;
