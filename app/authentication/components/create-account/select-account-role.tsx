import * as z from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { Text, Box } from '@radix-ui/themes';
import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { CreateAccountFormSchema } from '@/lib/type';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface SelectAccountRoleProps {
  form: UseFormReturn<z.infer<typeof CreateAccountFormSchema>>;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
}

const roles = [
  {
    name: 'student',
    description: [
      'Write Posts.',
      'Ask Qustions.',
      'Share Projects.',
      'Create Bounty Task.',
      'Earn Bounties.',
    ],
  },
  {
    name: 'recruiter',
    description: [
      'Write Posts.',
      'Post Jobs.',
      'Manage Applications.',
      'Create events.',
      'Review Students.',
    ],
  },
];
const SelectAccountRole = ({ form, setSteps }: SelectAccountRoleProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name='role'
        render={({ field }) => (
          <FormItem className='space-y-1'>
            <FormMessage />
            <RadioGroup
              onValueChange={field.onChange}
              className='grid max-w-md grid-cols-2 gap-8'
            >
              {roles.map((role) => (
                <FormItem key={role.name}>
                  <FormLabel className='[&:has([data-state=checked])>div]:border-primary'>
                    <FormControl>
                      <RadioGroupItem value={role.name} className='sr-only' />
                    </FormControl>
                    <Text
                      className='block w-full p-2 capitalize'
                      align='center'
                      weight='medium'
                    >
                      {role.name}
                    </Text>
                    <Box className='items-center rounded-md border-2 border-muted p-4 hover:border-accent'>
                      <ul className='flex list-inside list-disc flex-col space-y-2 text-xs marker:text-primary'>
                        {role.description.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </Box>
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
            <FormDescription className='pt-2 text-center'>
              You can not change your role once you create your account.
            </FormDescription>
          </FormItem>
        )}
      />
      <Button
        onClick={() => setSteps(2)}
        disabled={!form.formState?.dirtyFields?.role}
      >
        Next
      </Button>
    </>
  );
};

SelectAccountRole.displayName = 'SelectAccountRole';
export default SelectAccountRole;
