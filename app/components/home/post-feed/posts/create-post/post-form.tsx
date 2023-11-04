'use client';

import z from 'zod';
import { toast } from 'sonner';
import { useAtom } from 'jotai/react';
import { PostsAtom } from '@/lib/atom';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
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

export const postFormSchema = z.object({
  content: z.string().trim().min(1).max(256),
  type: z.enum(['thought', 'question']),
});

const PostForm = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const { data: session } = useSession();
  const [posts, setPosts] = useAtom(PostsAtom);
  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      type: 'thought',
    },
  });

  function onSubmit(data: z.infer<typeof postFormSchema>) {
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
        success: 'Status posted!',
        error: 'Something went wrong!',
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <Flex>
          <UserAvatar name={session?.user?.name} image={session?.user?.image} />
          <Flex direction='column' ml={4} width='full'>
            <Text weight='medium' as='p'>
              {session?.user?.name}
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
