'use client';
import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import CoverImage from './cover-image';
import { Input } from '@/components/ui/input';
import { ProfileFormValues } from '../schema';
import ProfilePicture from './profile-picture';
import { Grid } from '@/components/layout/grid';
import { Textarea } from '@/components/ui/textarea';

const ProfileFormFields = ({
  form,
}: {
  form: UseFormReturn<ProfileFormValues>;
}) => {
  return (
    <>
      <FormField
        control={form.control}
        name='username'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input
                maxLength={30}
                placeholder='No spaces, no special characters'
                {...field}
              />
            </FormControl>
            <FormDescription>
              This is your public display name. It can be your real name or a
              pseudonym.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Grid cols={1} mt={4} className='mt-4 gap-6'>
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem className='col-span-full'>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea maxLength={101} rows={4} {...field} />
              </FormControl>
              <FormDescription>
                Write a few sentences about yourself.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ProfilePicture form={form} />
        <CoverImage form={form} />
      </Grid>
    </>
  );
};

ProfileFormFields.displayName = 'ProfileFormFields';
export default ProfileFormFields;
