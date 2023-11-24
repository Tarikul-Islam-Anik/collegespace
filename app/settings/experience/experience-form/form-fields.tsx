import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Flex } from '@/components/layout/flex';
import { ExperienceFormValue } from './schema';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SelectDateField from '@/components/shared/select-date-field';
import SelectOptionsField from '@/components/shared/select-options-field';

const FormFields = ({ form }: { form: UseFormReturn<ExperienceFormValue> }) => {
  return (
    <Flex direction='column' gap={4}>
      {['title', 'position'].map((item, index) => (
        <FormField
          key={index}
          control={form.control}
          name={item as 'title' | 'position'}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='capitalize'>{item}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
      <SelectOptionsField
        form={form}
        name='type'
        label='Job type'
        triggerPlaceholder='Select job type'
        options={{
          fulltime: 'Full-time',
          parttime: 'Part-time',
          contract: 'Contract',
          internship: 'Internship',
          temporary: 'Temporary',
          remote: 'Remote',
          other: 'Other',
        }}
      />
      <FormField
        control={form.control}
        name='description'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea rows={4} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <SelectDateField form={form} name='startDate' label='Start Date' />
      <SelectDateField form={form} name='endDate' label='End Date' />
    </Flex>
  );
};

FormFields.displayName = 'ExperienceInfoFormFields';
export default FormFields;
