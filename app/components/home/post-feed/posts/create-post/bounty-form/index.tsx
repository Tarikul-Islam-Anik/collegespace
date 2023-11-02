import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { postFormSchema } from '../post-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Flex } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';

import SelectDeadlineField from './select-deadline-field';
const BountyForm = ({
  form,
  children,
}: {
  form: UseFormReturn<z.infer<typeof postFormSchema>>;
  children: React.ReactNode;
}) => {
  return (
    <Flex direction='column' className='w-full mb-4'>
      <FormField
        control={form.control}
        name='title'
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder='Bounty title...'
                className='border-0 pl-0 pt-1 font-medium shadow-none focus-visible:ring-transparent'
                maxLength={51}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {children}
      <Flex className='w-full space-x-4 items-center'>
        <SelectDeadlineField form={form} />
        <FormField
          control={form.control}
          name='reward'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Reward</FormLabel>
              <FormControl>
                <Input
                  placeholder='Bounty title'
                  className='shadow-none focus-visible:ring-transparent'
                  type='number'
                  max={10000}
                  min={500}
                  defaultValue={500}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Flex>
    </Flex>
  );
};
BountyForm.displayName = 'BountyForm';
export default BountyForm;
