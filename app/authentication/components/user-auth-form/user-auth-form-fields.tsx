import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Grid } from '@/components/layout/grid';
import { Input } from '@/components/ui/input';
import { UserAuthFormValues } from './schema';
import PasswordField from '@/components/shared/password-field';

const UserAuthFormFields = ({
  form,
}: {
  form: UseFormReturn<UserAuthFormValues>;
}) => {
  return (
    <Grid gap={2}>
      <FormField
        control={form.control}
        name='email'
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder='Email' type='email' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <PasswordField form={form} />
    </Grid>
  );
};

UserAuthFormFields.displayName = 'UserAuthFormFields';
export default UserAuthFormFields;
