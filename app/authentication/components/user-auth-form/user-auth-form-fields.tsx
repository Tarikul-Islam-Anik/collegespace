import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Grid } from '@/components/layout/grid';
import { Input } from '@/components/ui/input';
import { UserAuthFormSchema, UserAuthFormValues } from './schema';

const UserAuthFormFields = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof UserAuthFormSchema>>;
}) => {
  return (
    <Grid gap={2}>
      {['email', 'password'].map((name) => (
        <FormField
          key={name}
          control={form.control}
          name={name as keyof UserAuthFormValues}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='placeholder:capitalize'
                  placeholder={name}
                  type={name}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </Grid>
  );
};

UserAuthFormFields.displayName = 'UserAuthFormFields';
export default UserAuthFormFields;
