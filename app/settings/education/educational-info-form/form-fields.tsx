import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Flex } from '@/components/layout/flex';
import { EducationalInfoFormValues } from './schema';
import { Input } from '@/components/ui/input';
import SelectDateField from '@/components/shared/select-date-field';

const FormFields = ({
  form,
}: {
  form: UseFormReturn<EducationalInfoFormValues>;
}) => {
  return (
    <Flex direction='column' gap={4}>
      {['school', 'degree', 'field', 'grade'].map((item, index) => (
        <FormField
          key={index}
          control={form.control}
          name={item as 'school' | 'degree' | 'field' | 'grade'}
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
      <SelectDateField form={form} name='startDate' label='Start Date' />
      <SelectDateField form={form} name='endDate' label='End Date' />
    </Flex>
  );
};

FormFields.displayName = 'EducationInfoFormFields';
export default FormFields;
