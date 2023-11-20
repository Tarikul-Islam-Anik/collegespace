'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useStudentDetails from '@/hooks/useStudentDetails';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import FormFields from './form-fields';
import { educationalInfoFormSchema, EducationalInfoFormValues } from './schema';
import { Flex } from '@/components/layout/flex';

const EducationalInfoForm = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { mutate } = useStudentDetails();
  const defaultValues: Partial<EducationalInfoFormValues> = {
    school: '',
    degree: '',
    field: '',
    grade: 0.0,
  };

  const form = useForm<EducationalInfoFormValues>({
    resolver: zodResolver(educationalInfoFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  function onSubmit(data: EducationalInfoFormValues) {
    toast.promise(
      fetch('/api/education/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
      {
        loading: 'Adding educational information...',
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
          <Button type='submit'>Update</Button>
        </Flex>
      </form>
    </Form>
  );
};

EducationalInfoForm.displayName = 'EducationalInfoForm';
export default EducationalInfoForm;
