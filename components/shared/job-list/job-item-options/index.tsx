'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { More } from 'iconsax-react';
import { JobType } from '@/lib/type';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

const ViewJobItem = dynamic(() => import('../view-job-item'), {
  ssr: false,
});

const RemoveJobItem = dynamic(() => import('../remove-job-item'), {
  ssr: false,
});

const ViewApplicants = dynamic(
  () => import('@/components/shared/applicant/view-applicants'),
  {
    ssr: false,
  }
);

const items = ['View', 'Applicants', 'Delete'];

const JobItemOptions = ({ job }: { job: JobType }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon'>
            <More className='text-muted-foreground' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mr-2'>
          {items.map((item) => (
            <>
              {item === 'Delete' && <DropdownMenuSeparator />}
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={() => {
                    setContent(item);
                    setOpen(true);
                  }}
                  className={item === 'Delete' ? 'text-destructive' : ''}
                >
                  {item}
                </DropdownMenuItem>
              </DialogTrigger>
            </>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {content === 'View' && <ViewJobItem job={job} setOpen={setOpen}/>}
      {content === 'Delete' && (
        <RemoveJobItem jobId={job.id} companyId={job.companyId} />
      )}
      {content === 'Applicants' && (
        <ViewApplicants referenceId={job.id} applicantsFrom='jobs' />
      )}
    </Dialog>
  );
};

JobItemOptions.displayName = 'JobItemOptions';
export default JobItemOptions;
