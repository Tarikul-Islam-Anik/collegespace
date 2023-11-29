import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ProjectFormValues } from './schema';
import { Flex } from '@/components/layout/flex';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SelectDateField from '@/components/shared/select-date-field';

const FormFields = ({ form }: { form: UseFormReturn<ProjectFormValues> }) => {
  return (
    <Flex direction='column' gap={8}>
      {['title', 'description', 'website'].map((item) => (
        <FormField
          key={item}
          control={form.control}
          name={item as keyof ProjectFormValues}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='capitalize'>{item}</FormLabel>
              <FormControl>
                {item === 'description' ? (
                  <Textarea rows={4} {...(field as any)} />
                ) : (
                  <Input {...(field as any)} />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
      <SelectDateField name='startDate' label='Start Date' form={form} />
      <SelectDateField name='endDate' label='End Date' form={form} />
    </Flex>
  );
};

FormFields.displayName = 'ProjectFormFields';
export default FormFields;
