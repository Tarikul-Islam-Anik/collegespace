import z from 'zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { commentFormSchema } from './comment-form';

const CommentFormField = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof commentFormSchema>>;
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

CommentFormField.displayName = 'CommentFormField';
export default CommentFormField;

