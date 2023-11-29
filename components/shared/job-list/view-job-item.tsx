'use client';

import { toast } from 'sonner';
import { useState } from 'react';
import { format } from 'date-fns';
import { JobType } from '@/lib/type';
import useUser from '@/hooks/useUser';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Box } from '@/components/layout/box';
import { jobType } from './job-item';
import { Separator } from '@/components/ui/separator';
import DescriptionList from '../description-list';
import { Text } from '@/components/typography/text';
import { Flex } from '@/components/layout/flex';

const ViewJobItem = ({
  job,
  setOpen,
}: {
  job: JobType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const details: { [key: string]: any } = {};
  const showApply = !job.company.isOwner;
  const { user } = useUser();
  const canApply =
    user &&
    user.studentDetails &&
    user.studentDetails.educations.length > 0 &&
    user.studentDetails.about;

  if (job) {
    for (const [key, value] of Object.entries(job)) {
      if (
        key === 'id' ||
        key === 'companyId' ||
        key === 'createdAt' ||
        key === 'updatedAt' ||
        key === 'title' ||
        key === 'company'
      ) {
        continue;
      }
      details[key] = value;
    }
  }

  function handleApply() {
    toast.promise(
      fetch(`/api/company/jobs/${job.id}`, {
        method: 'POST',
      }).then((res) => res.json()),
      {
        loading: 'Applying...',
        success: (data) => {
          setOpen(false);
          return data.message;
        },
        error: 'Failed to apply!',
      }
    );
  }
  return (
    <DialogContent className='gap-0'>
      <DialogHeader>
        <DialogTitle>{job.title}</DialogTitle>
      </DialogHeader>
      <Box className='mt-6'>
        <dl>
          {Object.entries(details).map(
            ([key, value], index) =>
              !(value instanceof Date) && (
                <Box key={key}>
                  <DescriptionList
                    name={key}
                    value={
                      key === 'deadline'
                        ? format(new Date(value!), 'dd MMMM yyyy')
                        : key === 'salary'
                        ? `${new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'BDT',
                            minimumFractionDigits: 0,
                            currencyDisplay: 'narrowSymbol',
                          }).format(value as number)}`
                        : jobType(value as string)
                    }
                  />
                  {index !== Object.entries(details).length - 1 && (
                    <Separator className='my-4 sm:my-6' />
                  )}
                </Box>
              )
          )}
        </dl>
      </Box>
      {showApply && (
        <DialogFooter className='mt-8'>
          <Flex direction='column' gap={2} width='full'>
            {!canApply && (
              <Text color='destructive' align='center' size='sm'>
                Please fillup your personal and academic info before applying
              </Text>
            )}
            <Button
              type='submit'
              className='w-full'
              onClick={handleApply}
              disabled={!canApply}
            >
              Apply
            </Button>
          </Flex>
        </DialogFooter>
      )}
    </DialogContent>
  );
};

export default ViewJobItem;
