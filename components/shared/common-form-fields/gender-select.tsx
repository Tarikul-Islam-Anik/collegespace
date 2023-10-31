import z from 'zod';
import { UseFormReturn } from 'react-hook-form';
import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { CreateAccountFormSchema } from '@/lib/type';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const GenderSelect = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof CreateAccountFormSchema>>;
}) => {
  return (
    <FormField
      control={form.control}
      name='gender'
      render={({ field }) => (
        <FormItem className='ml-8 flex flex-col space-y-3'>
          <FormLabel>Gender</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className='flex items-center space-x-1'
            >
              {['male', 'female'].map((item) => (
                <FormItem
                  className='flex items-center space-x-2 space-y-0'
                  key={item}
                >
                  <FormControl>
                    <RadioGroupItem value={item} />
                  </FormControl>
                  <FormLabel className='font-normal capitalize'>
                    {item}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default GenderSelect;
