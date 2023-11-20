'use client';

import { useState } from 'react';
import { Job } from '@/lib/type';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Box } from '@/components/layout/box';
import { format } from 'date-fns';
import { jobType } from './job-item';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import DescriptionList from '../description-list';

const ViewJobItem = ({ job }: { job: Job }) => {
  const details: { [key: string]: any } = {};

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

  const [open, setOpen] = useState(false);
  function handleApply() {
    toast.promise(
      fetch(`/api/jobs/${job.id}`, {
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size='sm' variant='outline'>
          View
        </Button>
      </DialogTrigger>
      <DialogContent className='gap-0'>
        <DialogHeader>
          <DialogTitle>{job.title}</DialogTitle>
        </DialogHeader>
        <Box className='mt-6'>
          <dl>
            {Object.entries(details).map(
              ([key, value], index) =>
                !(value instanceof Date) && (
                  <>
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
                  </>
                )
            )}
          </dl>
        </Box>
        <DialogFooter className='mt-8'>
          <Button type='submit' className='w-full' onClick={handleApply}>
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewJobItem;
