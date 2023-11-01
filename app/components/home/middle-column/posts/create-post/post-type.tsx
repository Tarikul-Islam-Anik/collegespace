import z from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { postFormSchema } from './post-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const postTypes = z.enum(['thought', 'question', 'project']);

const PostType = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof postFormSchema>>;
}) => {
  return (
    <Select
      defaultValue='thought'
      onValueChange={(value) =>
        form.setValue('type', value as z.infer<typeof postTypes>)
      }
      name='type'
    >
      <SelectTrigger className='w-[115px] capitalize'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className='min-w-[100px]'>
        {postTypes._def.values.map((type) => (
          <SelectItem key={type} value={type} className='capitalize'>
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

PostType.displayName = 'PostType';
export default PostType;
