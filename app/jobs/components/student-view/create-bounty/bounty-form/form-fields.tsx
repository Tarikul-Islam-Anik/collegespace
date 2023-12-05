import { BountyFormValues } from './schema';
import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Flex } from '@/components/layout/flex';
import SelectDateField from '@/components/shared/select-date-field';
import { Textarea } from '@/components/ui/textarea';

const FormFields = ({ form }: { form: UseFormReturn<BountyFormValues> }) => {
  return (
    <Flex direction='column' gap={4} className='mb-4 w-full'>
      <FormField
        control={form.control}
        name='title'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='capitalize'>{field.name}</FormLabel>
            <FormControl>
              <Input maxLength={50} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='description'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='capitalize'>{field.name}</FormLabel>
            <FormControl>
              <Textarea rows={5} maxLength={1000} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Flex width='full' gap={4}>
        <SelectDateField
          name='deadline'
          label='Deadline'
          futureOnly
          form={form}
        />
        <FormField
          control={form.control}
          name='reward'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col'>
              <FormLabel className='capitalize'>{field.name}</FormLabel>
              <FormControl>
                <Input
                  placeholder='Bounty title'
                  type='number'
                  max={25000}
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
FormFields.displayName = 'BountyFormFields';
export default FormFields;
