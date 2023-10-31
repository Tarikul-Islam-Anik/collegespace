import z from 'zod';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { Box, Flex, Text } from '@radix-ui/themes';
import { UseFormReturn } from 'react-hook-form';
import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DobSelect from '@/components/shared/common-form-fields/dob-select';
import GenderSelect from '@/components/shared/common-form-fields/gender-select';
import { CreateAccountFormSchema, CreateAccountFormValues } from '@/lib/type';

const AccountFormFields = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof CreateAccountFormSchema>>;
}) => {
  const { formState } = form;
  const isLoading = formState.isSubmitting;
  const isValid = formState.isValid;

  return (
    <>
      {['name', 'email', 'phone', 'password'].map((item) => (
        <Box key={item}>
          <FormField
            control={form.control}
            name={item as keyof CreateAccountFormValues}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='capitalize'>{item}</FormLabel>
                <FormControl>
                  <Input {...(field as any)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Box>
      ))}
      <Flex width='100%' align='center'>
        <DobSelect form={form} />
        <GenderSelect form={form} />
      </Flex>
      <Button disabled={!isValid || isLoading} type='submit'>
        {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
        Sign up
      </Button>{' '}
      <Text className='text-center text-xs text-muted-foreground'>
        By clicking Sign Up, you agree to our{' '}
        <Link href='#' className='underline underline-offset-2'>
          Terms
        </Link>
        ,{' '}
        <Link href='#' className='underline underline-offset-2'>
          Privacy Policy
        </Link>{' '}
        and and
        <Link href='#' className='underline underline-offset-2'>
          {' '}
          Cookie Policy
        </Link>
        . You may receive SMS notifications from us and can opt out at any time.
      </Text>
    </>
  );
};

AccountFormFields.displayName = 'AccountFormFields';
export default AccountFormFields;
