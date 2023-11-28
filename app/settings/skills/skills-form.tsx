'use client';

import z from 'zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Flex } from '@/components/layout/flex';
import { toast } from 'sonner';
import { Box } from '@/components/layout/box';

const skillFormSchema = z.object({
  skills: z
    .array(
      z.object({
        value: z.string().max(100),
      })
    )
    .optional(),
});

type SkillFormValues = z.infer<typeof skillFormSchema>;

const SkillsForm = ({ skills }: { skills: string[] }) => {
  const form = useForm<SkillFormValues>({
    resolver: zodResolver(skillFormSchema),
    defaultValues: {
      skills: skills.map((item) => ({ value: item })),
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    name: 'skills',
    control: form.control,
  });

  function onSubmit(data: SkillFormValues) {
    const payload = {
      skills: data?.skills?.map((item) => item.value).join(','),
    };
    toast.promise(
      fetch('/api/student-details', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }),
      {
        loading: 'Updating personal information...',
        success: 'Personal information updated!',
        error: 'Something went wrong',
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Box mb={8}>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`skills.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    Skill
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && 'sr-only')}>
                    Enter a skill name you want to add.
                  </FormDescription>
                  <FormControl>
                    <Flex gap={2} justify='between' align='center'>
                      <Input {...field} />
                      <Button
                        type='button'
                        variant='outline'
                        size='sm'
                        className='ml-2'
                        onClick={() => remove(index)}
                      >
                        Remove
                      </Button>
                    </Flex>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type='button'
            variant='outline'
            size='sm'
            className='mt-2'
            onClick={() => append({ value: '' })}
          >
            {fields.length === 0
              ? 'You haven’t added any skills yet. Click here to add one.'
              : 'Add another skill'}
          </Button>
        </Box>
        <Button type='submit' disabled={!form.formState.isDirty}>
          Update profile
        </Button>
      </form>
    </Form>
  );
};

SkillsForm.displayName = 'SkillsForm';
export default SkillsForm;
