'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useStudentDetails from '@/hooks/useStudentDetails';
import { Form } from '@/components/ui/form';
import { projectFormSchema, ProjectFormValues } from './schema';
import FormFields from './form-fields';
import { Flex } from '@/components/layout/flex';
import { Button } from '@/components/ui/button';

interface ProjectFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectForm = ({ setOpen }: ProjectFormProps) => {
  const { mutate } = useStudentDetails();
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: '',
      description: '',
      website: '',
    },
  });
  function onSubmit(data: ProjectFormValues) {
    toast.promise(
      fetch('/api/student-details/project/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
      {
        loading: 'Adding project...',
        success: () => {
          mutate();
          setOpen(false);
          return 'Project added successfully!';
        },
        error: (err) => err.message,
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

ProjectForm.displayName = 'ProjectForm';
export default ProjectForm;
