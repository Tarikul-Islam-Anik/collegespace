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

const fields = [
  {
    value: 'name',
    description: 'To change your name, please contact support.',
  },
  {
    value: 'email',
    description: 'Your email address is the primary way we contact you.',
  },
  {
    value: 'phone',
    description:
      'Your phone number is not publicly visible. But it is visible to recruiters.',
  },
];

const PersonalInfoFormFields = ({
  form,
}: {
  form: UseFormReturn<PersonalInfoFormValues>;
}) => {
  return (
    <>
      {fields.map((item) => (
        <FormField
          control={form.control}
          name={item.value as keyof PersonalInfoFormValues}
          key={item.value}
          render={({ field }) => (
            <FormItem className='col-span-full'>
              <FormLabel className='capitalize'>{field.name}</FormLabel>
              <FormControl>
                <Input
                  maxLength={51}
                  {...(field as any)}
                  disabled
                />
              </FormControl>
              <FormDescription>{item.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
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
