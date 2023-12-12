'use client';
import SendEmail from './send-email';
import { BountyType } from '@/lib/type';
import SendMessage from './send-message';
import DeleteBounty from './delete-bounty';
import { useSession } from 'next-auth/react';
import { Flex } from '@/components/layout/flex';

const BountyActions = ({ bounty }: { bounty: BountyType }) => {
  const { data: session } = useSession();
  const isCreator = session?.user?.email === bounty?.creator_email;
  return (
    <Flex gap={2}>
      {isCreator ? (
        <DeleteBounty title={bounty.title} />
      ) : (
        <>
          <SendEmail email={bounty?.creator_email} />
          <SendMessage />
        </>
      )}
    </Flex>
  );
};

BountyActions.displayName = 'BountyActions';
export default BountyActions;
