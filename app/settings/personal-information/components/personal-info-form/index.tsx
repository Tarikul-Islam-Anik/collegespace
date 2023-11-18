'use client';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { UserType } from '@/lib/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import PersonalInfoFormFields from './personal-info-form-fields';
import { personalInfoFormSchema, PersonalInfoFormValues } from './schema';

const PersonalInfoForm = ({ data }: { data: UserType }) => {
  const defaultValues: Partial<PersonalInfoFormValues> = {
    name: data.name ?? '',
    email: data?.email ?? '',
    phone: data?.phone ?? '',
    dob: data?.studentDetails?.dob ?? '',
    gender: data?.studentDetails.gender ?? '',
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
      }),
      {
        loading: 'Updating personal information...',
        success: 'Personal information updated!',

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
