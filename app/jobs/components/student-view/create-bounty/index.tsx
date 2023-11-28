'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/shared/loader';
import EmptyState from '@/components/shared/empty-state';
import FormDialog from '@/components/shared/form-dialog';
import useUser from '@/hooks/useUser';
import { Gem } from 'lucide-react';

const BountyForm = dynamic(() => import('./bounty-form'), {
  ssr: false,
  loading: () => <Loader />,
});

const CreateBounty = () => {
  const [open, setOpen] = useState(false);
  const { user, isLoading } = useUser();

  if (isLoading) return <Loader className='h-[80vh]' />;

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

  return (
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
