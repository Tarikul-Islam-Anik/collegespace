import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PersonalInfoFormValues } from './schema';
import SelectDateField from '@/components/shared/select-date-field';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const PersonalInfoFormFields = ({
  form,
}: {
  form: UseFormReturn<PersonalInfoFormValues>;
}) => {
  return (
    <>
      <FormField
        control={form.control}
        name='name'
        render={({ field }) => (
          <FormItem className='col-span-full'>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input disabled maxLength={51} {...field} />
            </FormControl>
            <FormDescription>
              To change your name, please contact support.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='email'
        render={({ field }) => (
          <FormItem className='col-span-full'>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type='email' disabled {...field} />
            </FormControl>
            <FormDescription>
              Your email address is not publicly visible.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <SelectDateField
        form={form}
        name='dob'
        label='Date of birth'
        description='This won’t be part of your public profile.'
      />
      <FormField
        control={form.control}
        name='gender'
        render={({ field }) => (
          <FormItem className='flex flex-col space-y-3'>
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
    </>
  );
};

PersonalInfoFormFields.displayName = 'PersonalInfoFormFields';
export default PersonalInfoFormFields;
