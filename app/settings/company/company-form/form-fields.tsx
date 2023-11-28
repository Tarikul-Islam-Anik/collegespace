import { UseFormReturn } from 'react-hook-form';
import { CompanyFormValues } from './schema';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Flex } from '@/components/layout/flex';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import CompanyLogoField from './logo-field';

const descriptions = {
  name: 'Company name should be unique.',
  website: 'Leave blank if you do not have a website.',
  email: 'Contact email of your company.',
  phone: 'Helpline or contact number',
  about: 'Tell everyone about your company.',
  address: 'Leave blank if you do not have an address.',
};

const FormFields = ({ form }: { form: UseFormReturn<CompanyFormValues> }) => {
  return (
    <Flex direction='column' gap={8}>
      <CompanyLogoField form={form} />
      {['name', 'website', 'email', 'phone', 'about', 'address'].map((item) => (
        <FormField
          key={item}
          control={form.control}
          name={item as keyof CompanyFormValues}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='capitalize'>{item}</FormLabel>
              <FormControl>
                {item === 'address' || item === 'about' ? (
                  <Textarea
                    rows={4}
                    placeholder={item === 'address' ? 'Optional' : ''}
                    {...(field as any)}
                  />
                ) : (
                  <Input
                    placeholder={item === 'website' ? 'Optional' : ''}
                    {...(field as any)}
                  />
                )}
              </FormControl>
              <FormDescription>
                {descriptions[item as keyof typeof descriptions]}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </Flex>
  );
};

FormFields.displayName = 'CompanyFormFields';
export default FormFields;
