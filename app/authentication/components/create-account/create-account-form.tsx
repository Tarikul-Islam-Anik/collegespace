import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Form } from '@/components/ui/form';
import AccountFormFields from './account-form-fields';
import SelectAccountRole from './select-account-role';
import { CreateAccountFormSchema, CreateAccountFormValues } from './schema';

interface CreateAccountFormProps extends React.HTMLAttributes<HTMLFormElement> {
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateAccountForm = ({
  steps,
  setSteps,
  setOpen,
  className,
  ...props
}: CreateAccountFormProps) => {
  const form = useForm<CreateAccountFormValues>({
    resolver: zodResolver(CreateAccountFormSchema),
    mode: 'onBlur',
  });

  function onSubmit(data: CreateAccountFormValues) {
    setOpen(false);
    setSteps(1);
    toast.promise(
      fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
      {
        loading: 'Creating your account...',
        success:
          'Your account has been created successfully. You can login now.',
        error: (err) => {
          if (err.response.status === 400) {
            return err.response.data.error;
          } else {
            return 'Something went wrong. Please try again later.';
          }
        },
      }
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('grid gap-4', className)}
        {...props}
      >
        {steps === 1 ? (
          <SelectAccountRole form={form} setSteps={setSteps} />
        ) : (
          <AccountFormFields form={form} />
        )}
      </form>
    </Form>
  );
};

CreateAccountForm.displayName = 'CreateAccountForm';
export default CreateAccountForm;
