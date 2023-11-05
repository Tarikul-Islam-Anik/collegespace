'use client';

import { toast } from 'sonner';
import useCurrentUser from '@/hooks/useCurrentUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import ProfileFormFields from './profile-form-fields';
import { profileFormSchema, ProfileFormValues } from './schema';
import { uploadImage } from '@/lib/utils';

const ProfileForm = () => {
  const { currentUser, setCurrentUser } = useCurrentUser();

  const defaultValues: Partial<ProfileFormValues> = {
    username: currentUser?.username ?? '',
    bio: currentUser?.bio ?? '',
    image: currentUser?.image ?? '',
    coverImage: currentUser?.coverImage ?? '',
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
      changedValuesObj.image = await uploadImage(
        changedValuesObj.image as File
      );
    }

    if (changedValuesObj.coverImage) {
      changedValuesObj.coverImage = await uploadImage(
        changedValuesObj.coverImage as File
      );
    }

    toast.promise(
      fetch(`/api/users/${currentUser?.email}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changedValuesObj),
      })
        .then((res) => res.json())
        .then((data) => {
          setCurrentUser(data);
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
          Update profile
        </Button>
      </form>
    </Form>
  );
};

ProfileForm.displayName = 'ProfileForm';
export default ProfileForm;
