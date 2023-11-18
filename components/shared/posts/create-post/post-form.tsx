'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import usePosts from '@/hooks/usePosts';
import useCurrentUser from '@/hooks/useCurrentUser';
import { zodResolver } from '@hookform/resolvers/zod';
import PostType from './post-type';
import PostAddons from './post-addons';
import { Form } from '@/components/ui/form';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Button } from '@/components/ui/button';
import PostContentField from './post-content-field';
import { Text } from '@/components/typography/text';
import UserAvatar from '@/components/shared/user-avatar';
import { PostFormValues, postFormSchema } from './schema';



const PostForm = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const { currentUser } = useCurrentUser();
  const { mutate } = usePosts();
  const form = useForm<PostFormValues>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      type: 'thought',
    },
  });

  function onSubmit(data: PostFormValues) {
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
        loading: `Posting ${data.type}...`,
        success: () => {
          mutate();
          return 'Status posted!';
        },
        error: 'Something went wrong!',
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
            <PostContentField form={form} />
          </Flex>
        </Flex>
        <Flex align='center' justify='between'>
          <Flex align='center'>
            <PostType form={form} />
            <Box ml={2} className='h-6 border-l-2 border-muted' />
            <PostAddons />
          </Flex>
          <Flex align='center' className='space-x-2'>
            <Text className='text-sm text-destructive'>
              {form.watch?.('content')?.length === 256 &&
                form.watch?.('content')?.length}
            </Text>
            <Button
              type='submit'
              disabled={!form.formState.isValid || form.formState.isSubmitting}
            >
              Post
            </Button>
          </Flex>
        </Flex>
      </form>
    </Form>
  );
};

PostForm.displayName = 'PostForm';
export default PostForm;
