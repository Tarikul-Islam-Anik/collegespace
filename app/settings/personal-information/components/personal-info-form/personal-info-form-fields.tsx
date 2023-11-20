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
import SelectCountryField from '@/components/shared/select-country-field';
import SelectGenderField from '@/components/shared/select-gender-field';
import { Textarea } from '@/components/ui/textarea';

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
                <Input maxLength={51} {...(field as any)} disabled />
              </FormControl>
              <FormDescription>{item.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
      <FormField
        control={form.control}
        name='about'
        render={({ field }) => (
          <FormItem className='col-span-full'>
            <FormLabel className='capitalize'>{field.name}</FormLabel>
            <FormControl>
              <Textarea rows={4} maxLength={1000} {...field} />
            </FormControl>
            <FormDescription>
              Describe your professional experience, accomplishments, and
              skills.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='experience'
        render={({ field }) => (
          <FormItem className='col-span-full'>
            <FormLabel className='capitalize'>{field.name}</FormLabel>
            <FormControl>
              <Input type='number' min={0} max={10} {...field} />
            </FormControl>
            <FormDescription>
              How many years of experience do you have in your field?
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <SelectCountryField form={form} />
      <SelectDateField
        form={form}
        name='dob'
        label='Date of birth'
        description='This won’t be part of your public profile.'
      />
      <SelectGenderField form={form} />
    </>
  );
};

PersonalInfoFormFields.displayName = 'PersonalInfoFormFields';
export default PersonalInfoFormFields;
