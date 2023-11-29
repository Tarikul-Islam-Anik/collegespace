'use client';
import SendEmail from './send-email';
import { BountyType } from '@/lib/type';
import SendMessage from './send-message';
import DeleteBounty from './delete-bounty';
import { Flex } from '@/components/layout/flex';

const BountyActions = ({ bounty }: { bounty: BountyType }) => {
  return (
    <Flex gap={2}>
      {!bounty?.user ? (
        <DeleteBounty title={bounty.title} />
      ) : (
        <>
          <SendEmail email={bounty?.user?.email!} />
          <SendMessage />
        </>
      )}
    </Flex>
  );
};

BountyActions.displayName = 'BountyActions';
export default BountyActions;
