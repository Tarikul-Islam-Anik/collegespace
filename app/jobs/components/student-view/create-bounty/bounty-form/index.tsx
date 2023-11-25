'use client';

import { toast } from 'sonner';
import { BountyFormValues, bountyFormSchema } from './schema';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import usePosts from '@/hooks/usePosts';
import FormFields from './form-fields';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Flex } from '@/components/layout/flex';
import { Button } from '@/components/ui/button';

const BountyForm = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const { data: session } = useSession();
  const currentUser = session?.user;

  const { mutate } = usePosts();
  const form = useForm<BountyFormValues>({
    resolver: zodResolver(bountyFormSchema),
    defaultValues: {
      title: '',
      description: '',
      reward: 500,
    },
  });

  function onSubmit(data: BountyFormValues) {
    setOpen(false);
    toast.promise(
      fetch('/api/posts/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
      {
        loading: 'Posting bounty...',
        success: () => {
          mutate();
          return 'Bounty posted successfully!';
        },
        error: 'Something went wrong!',
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <FormFields form={form} />
        <Flex justify='end'>
          <Button
            type='button'
            variant='secondary'
            className='mr-2'
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button type='submit'>Post</Button>
        </Flex>
      </form>
    </Form>
  );
};

BountyForm.displayName = 'BountyForm';
export default BountyForm;
