'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useStudentDetails from '@/hooks/useStudentDetails';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Flex } from '@/components/layout/flex';
import { ExperienceFormValue, experienceFormSchema } from './schema';
import FormFields from './form-fields';

const ExperienceForm = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { mutate } = useStudentDetails();
  const defaultValues: Partial<ExperienceFormValue> = {
    title: '',
    position: '',
    description: '',
  };

  const form = useForm<ExperienceFormValue>({
    resolver: zodResolver(experienceFormSchema),
    defaultValues,
    mode: 'onChange',
  });
  function onSubmit(data: ExperienceFormValue) {
    toast.promise(
      fetch('/api/student-details/experience/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
      {
        loading: 'Adding experience information...',
        success: () => {
          mutate();
          setOpen(false);
          return 'Information added successfully!';
        },
        error: 'Something went wrong!',
      }
    );
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormFields form={form} />
        <Flex justify='end' mt={4} gap={4}>
          <Button
            type='button'
            variant='secondary'
            onClick={() => form.reset()}
          >
            Clear
          </Button>
          <Button type='submit'>Add</Button>
        </Flex>
      </form>
    </Form>
  );
};

ExperienceForm.displayName = 'ExperienceForm';
export default ExperienceForm;
