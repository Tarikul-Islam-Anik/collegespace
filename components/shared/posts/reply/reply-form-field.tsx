import z from 'zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { replyFormSchema } from './reply-form';

const ReplyFormField = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof replyFormSchema>>;
}) => {
  return (
    <FormField
      control={form.control}
      name='content'
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              placeholder='Write something...'
              className='resize-none border-0 pl-0 pt-1 shadow-none focus-visible:ring-transparent'
              maxLength={128}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

ReplyFormField.displayName = 'ReplyFormField';
export default ReplyFormField;

