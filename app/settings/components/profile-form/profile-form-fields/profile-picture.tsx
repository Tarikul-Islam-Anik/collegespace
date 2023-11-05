'use client';

import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ProfileFormValues } from '../schema';
import { Flex } from '@/components/layout/flex';
import UserAvatar from '@/components/shared/user-avatar';
import { Label } from '@/components/ui/label';

const ProfilePicture = ({
    form,
  }: {
    form: UseFormReturn<ProfileFormValues>;
  }) => {
  return (
    <FormField
      control={form.control}
      name='image'
      render={({ field: { value, onChange, ...field } }) => (
        <FormItem className='col-span-full'>
          <FormLabel>Profile Picture</FormLabel>
          <FormControl>
            <Flex mt={2} align='center' gap={4}>
              <UserAvatar
                name={
                  form.getValues('username') === ''
                    ? 'User'
                    : form.getValues('username')
                }
                image={
                  typeof value === 'object' ? URL.createObjectURL(value) : value
                }
                className='h-12 w-12'
              />
              <Button variant='outline' asChild>
                <Label htmlFor='image'>
                  <Input
                    id='image'
                    type='file'
                    className='sr-only'
                    placeholder='Upload a file'
                    // @ts-ignore
                    value={value?.fileName}
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        onChange(file);
                      }
                    }}
                    {...field}
                  />
                  Change
                </Label>
              </Button>
            </Flex>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ProfilePicture;
