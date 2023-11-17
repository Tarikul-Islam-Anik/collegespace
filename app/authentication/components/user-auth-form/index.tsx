'use client';

import { toast } from 'sonner';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { UserAtom } from '@/lib/atom';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Grid } from '@/components/layout/grid';
import Loader from '@/components/shared/loader';
import { UserAuthFormSchema, UserAuthFormValues } from './schema';
import UserAuthFormFields from './user-auth-form-fields';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const router = useRouter();
  const [, setUser] = useAtom(UserAtom);
  const [loading, setLoading] = useState(false);
  const form = useForm<UserAuthFormValues>({
    resolver: zodResolver(UserAuthFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
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
        setLoading(false);
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
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('grid gap-6', className)}
        {...props}
      >
        <Grid gap={4}>
          <UserAuthFormFields form={form} />
          <Button disabled={!isValid || loading} type='submit'>
            {loading && <Loader className='mr-2 h-4 w-4 text-muted-foreground' />}
            Sign In with Email
          </Button>
        </Grid>
      </form>
    </Form>
  );
};

UserAuthForm.displayName = 'UserAuthForm';
export default UserAuthForm;
