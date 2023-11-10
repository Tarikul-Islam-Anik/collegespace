'use client';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import useCurrentUser from '@/hooks/useCurrentUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import PersonalInfoFormFields from './personal-info-form-fields';
import { personalInfoFormSchema, PersonalInfoFormValues } from './schema';

const PersonalInfoForm = () => {
  const { currentUser, setCurrentUser } = useCurrentUser();
  const defaultValues: Partial<PersonalInfoFormValues> = {
    name: currentUser?.name ?? '',
    email: currentUser?.email ?? '',
    phone: currentUser?.phone ?? '',
    dob: currentUser?.StudentDetails?.dob ?? '',
    gender: currentUser?.StudentDetails?.gender ?? '',
  };

  const form = useForm<PersonalInfoFormValues>({
    resolver: zodResolver(personalInfoFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  function onSubmit(data: PersonalInfoFormValues) {
    const changedValues = form.formState.dirtyFields;

    if (!Object.keys(changedValues).length) {
      return;
    }

    const changedValuesObj = Object.keys(changedValues).reduce(
      (result, key) => ({
        ...result,
        [key]: data[key as keyof PersonalInfoFormValues],
      }),
      {}
    );

    toast.promise(
      fetch('/api/student-details', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changedValuesObj),
      }).then((res) => res.json()),
      {
        loading: 'Updating personal information...',
        success: (data) => {
          setCurrentUser({
            ...currentUser!,
            StudentDetails: {
              ...currentUser?.StudentDetails!,
              ...data,
            },
          });
          return 'Personal information updated!';
        },
        error: 'Something went wrong',
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 p-2'>
        <PersonalInfoFormFields form={form} />
        <Button type='submit'>Update</Button>
      </form>
    </Form>
  );
};

PersonalInfoForm.displayName = 'ProfileForm';
export default PersonalInfoForm;
