'use client';
import { UseFormReturn } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LampOn, MessageQuestion } from 'iconsax-react';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { PostFormValues, postFormSchema } from './schema';

const PostTypeIcon = ({ type }: { type: string }) => {
  return type === 'question' ? (
    <MessageQuestion className='text-muted-foreground' size={20} />
  ) : (
    <LampOn className='text-muted-foreground' size={20} />
  );
};

const PostType = ({ form }: { form: UseFormReturn<PostFormValues> }) => {
  return (
    <Select
      defaultValue='thought'
      onValueChange={(value) =>
        form.setValue('type', value as PostFormValues['type'])
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
