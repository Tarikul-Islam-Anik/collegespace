'use client';
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
import { Box, LampOn, MessageQuestion, DocumentText } from 'iconsax-react';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';


const PostTypeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'question':
      return <MessageQuestion className='text-muted-foreground' size={20} />;
    case 'job':
      return <DocumentText className='text-muted-foreground' size={20} />;
    case 'project':
      return <Box className='text-muted-foreground' size={20} />;
    default:
      return <LampOn className='text-muted-foreground' size={20} />;
  }
};

const PostType = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof postFormSchema>>;
}) => {
  return (
    <Select
      defaultValue='thought'
      onValueChange={(value) =>
        form.setValue('type', value as z.infer<typeof postFormSchema>['type'])
      }
      name='type'
    >
      <SelectTrigger className='w-[130px] capitalize'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className='min-w-[120px]'>
        {postFormSchema._def.shape().type._def.values.map((type) => (
          <SelectItem key={type} value={type} className='capitalize'>
            <Flex align='center' className='space-x-2'>
              <PostTypeIcon type={type} />
              <Text>{type}</Text>
            </Flex>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

PostType.displayName = 'PostType';
export default PostType;
