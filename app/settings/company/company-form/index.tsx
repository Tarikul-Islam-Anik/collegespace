'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { uploadImage } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import FormFields from './form-fields';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import useCurrentUser from '@/hooks/useCurrentUser';
import { companyFormSchema, CompanyFormValues } from './schema';

const CompanyForm = () => {
  const { currentUser, setCurrentUser } = useCurrentUser();

  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      name: currentUser?.company[0]?.name ?? '',
      about: currentUser?.company[0]?.about ?? '',
      address: currentUser?.company[0]?.address ?? '',
      phone: currentUser?.company[0]?.phone ?? '',
      website: currentUser?.company[0]?.website ?? '',
      email: currentUser?.company[0]?.email ?? '',
      logo: currentUser?.company[0]?.logo ?? '',
    },
    mode: 'onChange',
  });

  async function onSubmit(data: CompanyFormValues) {
    data.logo = await uploadImage(data.logo);

    const changedValues = form.formState.dirtyFields;

    if (!Object.keys(changedValues).length) {
      return;
    }

    const changedValuesObj: Partial<CompanyFormValues> = Object.keys(
      changedValues
    ).reduce(
      (result, key) => ({
        ...result,
        [key]: data[key as keyof CompanyFormValues],
      }),
      {}
    );

    toast.promise(
      fetch('/api/company', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changedValuesObj),
      }).then((res) => res.json()),
      {
        loading: 'Updating...',
        success: (res) => {
          setCurrentUser(
            (prev) =>
              (prev = {
                ...prev!,
                company: [res],
              })
          );
          return 'Updated!';
        },
        error: 'Something went wrong!',
      }
    );
  }

  const isDisabled =
    Object.keys(form.formState.dirtyFields).length === 0 ||
    !form.formState.isValid ||
    form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormFields form={form} />
        <Button type='submit' className='mt-6' disabled={isDisabled}>
          Update
        </Button>
      </form>
    </Form>
  );
};

CompanyForm.displayName = 'CompanyForm';
export default CompanyForm;
