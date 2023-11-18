'use client';

import z from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import usePosts from '@/hooks/usePosts';
import { useSession } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import UserAvatar from '@/components/shared/user-avatar';
import { Button } from '@/components/ui/button';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import ReplyFormField from './reply-form-field';

export const replyFormSchema = z.object({
  content: z.string().trim().min(1).max(128),
});

const ReplyForm = ({
  postId,
  setOpen,
}: {
  postId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { mutate } = usePosts();
  const { data: session } = useSession();
  const currentUser = session?.user;

  const form = useForm<z.infer<typeof replyFormSchema>>({
    resolver: zodResolver(replyFormSchema),
    defaultValues: {
      content: '',
    },
  });

  function onSubmit(data: z.infer<typeof replyFormSchema>) {
    const payLoad = {
      content: data.content,
      id: postId,
    };

    toast.promise(
      fetch('/api/reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payLoad),
      }).then((res) => res.json()),
      {
        loading: 'Adding a reply...',
        success: () => {
          mutate();
          setOpen(false);
          return 'Reply added!';
        },
        error: 'Failed to add Reply. Please try again.',
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <Flex>
          <UserAvatar name={currentUser?.name} image={currentUser?.image} />
          <Flex direction='column' ml={4} width='full'>
            <Text weight='medium' as='p'>
              {currentUser?.name}
            </Text>
            <ReplyFormField form={form} />
          </Flex>
        </Flex>
        <DialogFooter>
          <Flex gap={4}>
            <DialogClose asChild>
              <Button type='button' size='sm' variant='secondary'>
                Close
              </Button>
            </DialogClose>
            <Button type='submit' size='sm'>
              Comment
            </Button>
          </Flex>
        </DialogFooter>
      </form>
    </Form>
  );
};

ReplyForm.displayName = 'ReplyForm';
export default ReplyForm;
