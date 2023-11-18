'use client';

import { toast } from 'sonner';
import { UserType } from '@/lib/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import ProfileFormFields from './profile-form-fields';
import { profileFormSchema, ProfileFormValues } from './schema';
import { uploadImage } from '@/lib/utils';

const ProfileForm = ({ user }: { user: UserType }) => {
  const defaultValues: Partial<ProfileFormValues> = {
    username: user.username ?? '',
    bio: user.bio ?? '',
    image: user.image ?? '',
    coverImage: user.coverImage ?? '',
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  async function onSubmit(data: ProfileFormValues) {
    const changedValues = form.formState.dirtyFields;

    if (!Object.keys(changedValues).length) {
      return;
    }

    const changedValuesObj: Partial<ProfileFormValues> = Object.keys(
      changedValues
    ).reduce(
      (result, key) => ({
        ...result,
        [key]: data[key as keyof ProfileFormValues],
      }),
      {}
    );

    if (changedValuesObj.image) {
      changedValuesObj.image = await uploadImage(changedValuesObj.image);
    }

    if (changedValuesObj.coverImage) {
      changedValuesObj.coverImage = await uploadImage(
        changedValuesObj.coverImage
      );
    }

    toast.promise(
      fetch(`/api/users/${user.email}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changedValuesObj),
      }),
      {
        loading: 'Updating profile...',
        success: 'Profile updated!',
        error: 'Something went wrong',
      }
    );
  }

  const isDisabled =
    Object.keys(form.formState.dirtyFields).length === 0 ||
    !form.formState.isValid ||
    form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 p-2'>
        <ProfileFormFields form={form} />
        <Button type='submit' disabled={isDisabled}>
          Update
        </Button>
      </form>
    </Form>
  );
};

ProfileForm.displayName = 'ProfileForm';
export default ProfileForm;
