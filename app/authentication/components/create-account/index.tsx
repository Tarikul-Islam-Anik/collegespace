'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { ArrowLeft } from 'iconsax-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Loader from '@/components/shared/loader';
import { Text } from '@/components/typography/text';

const CreateAccountForm = dynamic(() => import('./create-account-form'), {
  ssr: false,
  loading: () => <Loader className='h-64' />,
});

const CreateAccount = () => {
  const [steps, setSteps] = useState(1);
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline' type='button'>
          Create an account
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {steps === 1 ? 'Select account role' : 'Create an account'}
          </DialogTitle>
          <DialogDescription className='flex items-center space-x-1'>
            {steps === 2 && (
              <ArrowLeft
                className='h-4 w-4 cursor-pointer'
                onClick={() => setSteps(1)}
              />
            )}
            <Text>Step {steps} of 2</Text>
          </DialogDescription>
        </DialogHeader>
        <CreateAccountForm
          steps={steps}
          setSteps={setSteps}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

CreateAccount.displayName = 'CreateAccount';
export default CreateAccount;
