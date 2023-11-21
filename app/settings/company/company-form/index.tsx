'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { uploadImage } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import FormFields from './form-fields';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { companyFormSchema, CompanyFormValues } from './schema';
import { UserType } from '@/lib/type';
import useCurrentUser from '@/hooks/useCurrentUser';

const CompanyForm = ({ user }: { user: UserType }) => {
  const { setCurrentUser } = useCurrentUser();
  const company = user?.company;
  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      name: company?.name ?? '',
      about: company?.about ?? '',
      address: company?.address ?? '',
      phone: company?.phone ?? '',
      website: company?.website ?? '',
      email: company?.email ?? '',
      logo: company?.logo ?? '',
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
        success: (data) => {
          setCurrentUser((prev) => ({
            ...prev!,
            company: data.company,
          }));
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
