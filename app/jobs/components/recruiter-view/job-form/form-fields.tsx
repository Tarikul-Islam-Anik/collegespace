import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Flex } from '@/components/layout/flex';
import { JobFormValue } from './schema';
import { Input } from '@/components/ui/input';
import SelectDateField from '@/components/shared/select-date-field';
import { Textarea } from '@/components/ui/textarea';
import SelectOptionsField from '@/components/shared/select-options-field';

const FormFields = ({ form }: { form: UseFormReturn<JobFormValue> }) => {
  return (
    <Flex direction='column' gap={4}>
      {['title', 'description', 'location', 'salary'].map((item, index) => (
        <FormField
          key={index}
          control={form.control}
          name={item as keyof JobFormValue}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='capitalize'>{item}</FormLabel>
              <FormControl>
                {item === 'description' ? (
                  <Textarea {...(field as any)} rows={4} />
                ) : (
                  <Input
                    {...(field as any)}
                    {...(item === 'salary' && {
                      type: 'number',
                      placeholder: '৳',
                    })}
                  />
                )}
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
      <SelectDateField
        form={form}
        name='deadline'
        label='Application deadline'
        futureOnly
      />
    </Flex>
  );
};

FormFields.displayName = 'JobFormFields';
export default FormFields;
