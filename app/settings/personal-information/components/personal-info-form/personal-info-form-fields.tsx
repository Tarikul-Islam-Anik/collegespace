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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';

import { Calendar as CalenderIcon } from 'iconsax-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
      <FormField
        control={form.control}
        name='dob'
        render={({ field }) => (
          <FormItem className='flex flex-col'>
            <FormLabel>Date of birth</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[240px] pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground'
                    )}
                  >
                    {field.value ? (
                      format(new Date(field.value), 'PPP')
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalenderIcon className='ml-auto h-4 w-4 opacity-50' />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  mode='single'
                  selected={new Date(field.value ?? '')}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date('1900-01-01')
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormDescription>
              This won’t be part of your public profile.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
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
