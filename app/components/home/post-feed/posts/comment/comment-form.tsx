'use client';

import z from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import usePosts from '@/hooks/usePosts';
import useCurrentUser from '@/hooks/useCurrentUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import UserAvatar from '@/components/shared/user-avatar';
import { Button } from '@/components/ui/button';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import CommentFormField from './comment-form-field';

export const commentFormSchema = z.object({
  content: z.string().trim().min(1).max(128),
});

const CommentForm = ({
  postId,
  setOpen,
}: {
  postId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { currentUser } = useCurrentUser();
  const { mutate } = usePosts();
  const form = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      content: '',
    },
  });

  function onSubmit(data: z.infer<typeof commentFormSchema>) {
    const payLoad = {
      content: data.content,
      id: postId,
    };

    toast.promise(
      fetch('/api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payLoad),
      }).then((res) => res.json()),
      {
        loading: 'Adding comment...',
        success: () => {
          mutate();
          setOpen(false);
          return 'Comment added!';
        },
        error: 'Failed to add comment. Please try again.',
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
            <CommentFormField form={form} />
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

CommentForm.displayName = 'CommentForm';
export default CommentForm;
