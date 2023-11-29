import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { postFormSchema } from './schema';
import { Textarea } from '@/components/ui/textarea';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

const PostContentField = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof postFormSchema>>;
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
              rows={6}
              maxLength={256}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

PostContentField.displayName = 'PostContentField';
export default PostContentField;
