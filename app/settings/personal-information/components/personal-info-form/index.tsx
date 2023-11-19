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
    country: data?.studentDetails.country ?? '',
    about: data?.studentDetails.about ?? '',
    experience: data?.studentDetails.experience ?? '',
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
        [key]:
          key === 'experience'
            ? parseInt(
                data[key as keyof PersonalInfoFormValues]?.toString() ?? '0',
                10
              )
            : data[key as keyof PersonalInfoFormValues],
      }),
      {}
    );

    let payload = {};

    if (data.country) {
      payload = {
        ...changedValuesObj,
        country: data.country,
      };
    }

    toast.promise(
      fetch('/api/student-details', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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
        <Button type='submit' disabled={!form.formState.isDirty}>
          Update
        </Button>
      </form>
    </Form>
  );
};

PersonalInfoForm.displayName = 'ProfileForm';
export default PersonalInfoForm;
