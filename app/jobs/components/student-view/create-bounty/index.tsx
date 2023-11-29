'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/shared/loader';
import EmptyState from '@/components/shared/empty-state';
import FormDialog from '@/components/shared/form-dialog';
import { Gem } from 'lucide-react';
import useBounty from '@/hooks/useBounty';
import BountyList from '@/components/shared/bounty-list';
import { Flex } from '@/components/layout/flex';

const BountyForm = dynamic(() => import('./bounty-form'), {
  ssr: false,
  loading: () => <Loader />,
});

const CreateBounty = () => {
  const [open, setOpen] = useState(false);
  const { bounties, isLoading } = useBounty(true);

  if (isLoading) return <Loader className='h-96' />;

  const AddNew = (
    <FormDialog
      open={open}
      setOpen={setOpen}
      title='Add a new bounty'
      label='Add'
      description='Get help from the community.'
    >
      <BountyForm setOpen={setOpen} />
    </FormDialog>
  );

  return bounties && bounties?.length ? (
    <>
      <BountyList currentUser />
      <Flex align='center' justify='center' mt={4} width='full'>
        {AddNew}
      </Flex>
    </>
  ) : (
    <EmptyState
      icon={<Gem className='h-12 w-12' strokeWidth={1} />}
      title="You haven't posted any bounties yet."
      description='Post a bounty to get started and get help from the community.'
    >
      {AddNew}
    </EmptyState>
  );
};

CreateBounty.displayName = 'CreateBounty';
export default CreateBounty;
