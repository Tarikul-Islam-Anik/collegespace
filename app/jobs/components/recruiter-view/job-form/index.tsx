'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useJobs from '@/hooks/useJobs';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import FormFields from './form-fields';
import { JobFormValue, jobFormSchema } from './schema';
import { Flex } from '@/components/layout/flex';

const JobForm = ({
  companyId,
  setOpen,
}: {
  companyId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { mutate } = useJobs(companyId);
  const defaultValues: Partial<JobFormValue> = {
    title: '',
    description: '',
    location: '',
    salary: '',
  };

  const form = useForm<JobFormValue>({
    resolver: zodResolver(jobFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  function onSubmit(data: JobFormValue) {
    const payload = {
      ...data,
      salary: parseInt(data.salary),
    };

    toast.promise(
      fetch('/api/company/jobs/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }),
      {
        loading: 'Creating a job post...',
        success: () => {
          mutate();
          setOpen(false);
          return 'Job post created successfully!';
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
          <Button type='submit'>Post</Button>
        </Flex>
      </form>
    </Form>
  );
};

JobForm.displayName = 'JobForm';
export default JobForm;
