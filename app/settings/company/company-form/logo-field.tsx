'use client';

import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CompanyFormValues } from './schema';
import { Flex } from '@/components/layout/flex';
import UserAvatar from '@/components/shared/user-avatar';
import { Label } from '@/components/ui/label';

const CompanyLogoField = ({
  form,
}: {
  form: UseFormReturn<CompanyFormValues>;
}) => {
  return (
    <FormField
      control={form.control}
      name='logo'
      render={({ field: { value, onChange, ...field } }) => (
        <FormItem className='col-span-full'>
          <FormLabel>Logo</FormLabel>
          <FormControl>
            <Flex mt={2} align='center' gap={4}>
              <UserAvatar
                name={form.getValues('name')}
                image={
                  typeof value === 'object' ? URL.createObjectURL(value) : value
                }
                className='h-24 w-24 rounded-[var(--radius)]'
              />
              <Button variant='outline' asChild>
                <Label htmlFor='image'>
                  <Input
                    id='image'
                    type='file'
                    className='sr-only'
                    placeholder='Upload a file'
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
          <FormDescription>
            Recommended size: 400x400px.
            <br /> Max file size: 2MB.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

CompanyLogoField.displayName = 'CompanyLogoField';
export default CompanyLogoField;
