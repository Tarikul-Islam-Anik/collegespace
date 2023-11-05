'use client';

import { toast } from 'sonner';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { UserAtom } from '@/lib/atom';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Grid } from '@/components/layout/grid';
import {
  UserAuthFormSchema,
  UserAuthFormValues,
} from './schema';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const router = useRouter();
  const [, setUser] = useAtom(UserAtom);
  const form = useForm<UserAuthFormValues>({
    resolver: zodResolver(UserAuthFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
    control,
  } = form;

  function onSubmit(data: UserAuthFormValues) {
    setLoading(true);
    const { email, password } = data;
    signIn('credentials', {
      email,
      password,
      redirect: false,
    }).then((res) => {
      if (res?.error) {
        toast.error(res?.error);
      } else {
        fetch(`/api/users/${email}`)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((data) => {
            setUser(data);
          })
          .finally(() => {
            toast.success('Signed in successfully');
            router.push('/');
          });
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
            {['email', 'password'].map((name) => (
              <FormField
                key={name}
                control={control}
                name={name as keyof UserAuthFormValues}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className='placeholder:capitalize'
                        placeholder={name}
                        type={name}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </Grid>
          <Button disabled={!isValid || loading || isSubmitting} type='submit'>
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
