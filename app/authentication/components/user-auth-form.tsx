'use client';

import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Grid } from '@/components/layout/grid';

const UserAuthFormSchema = z.object({
  email: z.string({ required_error: 'Please enter your email address' }).email({
    message: 'Please enter a valid email address',
  }),
  password: z.string({ required_error: 'Please enter your password' }).min(8, {
    message: 'Please enter a valid password',
  }),
});

type UserAuthFormValues = z.infer<typeof UserAuthFormSchema>;
interface UserAuthFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const router = useRouter();
  const form = useForm<UserAuthFormValues>({
    resolver: zodResolver(UserAuthFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [loading, setLoading] = useState(false);
  const { handleSubmit, formState, control } = form;
  const isValid = formState.isValid;
  function onSubmit(data: UserAuthFormValues) {
    setLoading(true);

    signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((res) => {
      if (res?.error) {
        toast.error(res?.error);
      } else {
        toast.success('Signed in successfully');
        router.push('/');
      }
    });

    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('grid gap-6', className)}
        {...props}
      >
        <Grid gap={4}>
          <Grid gap={2}>
            <FormField
              control={control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Email' type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Password' type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Grid>
          <Button disabled={!isValid || loading} type='submit'>
            {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Sign In with Email
          </Button>
        </Grid>
      </form>
    </Form>
  );
};

UserAuthForm.displayName = 'UserAuthForm';
export default UserAuthForm;
