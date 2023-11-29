'use client';
import { useState } from 'react';
import { JobType } from '@/lib/type';
import { Location } from 'iconsax-react';
import ViewJobItem from './view-job-item';
import { Box } from '@/components/layout/box';
import CompanyDetails from '../company-details';
import { Button } from '@/components/ui/button';
import JobItemOptions from './job-item-options';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { Heading } from '@/components/typography/heading';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

export const jobType = (type: string) => {
  switch (type) {
    case 'fulltime':
      return 'Full Time';
    case 'parttime':
      return 'Part Time';
    default:
      return type;
  }
};

const JobItem = ({ job }: { job: JobType }) => {
  const [open, setOpen] = useState(false);
  return (
    <Flex justify='between' align={'center'} className='space-x-1'>
      <Flex direction='column' gap={2}>
        <Heading as='h3' weight='medium'>
          {job.title}
        </Heading>
        <Text
          as='p'
          color='muted-foreground'
          size='sm'
          className='line-clamp-3'
        >
          {job.description}
        </Text>
        <Flex gap={2} align='center' className='text-sm text-muted-foreground'>
          <Flex align='center' className='max-w-[280px]'>
            <Location size={12} className='mr-1' />
            <Text as='p' className='truncate'>
              {job.location}
            </Text>
          </Flex>
          <Text size='xs'>&bull;</Text>
          <Text className='min-w-[60px] capitalize'>{jobType(job.type)}</Text>
          <Text size='xs'>&bull;</Text>
          <CompanyDetails name={job.company.name} id={job.companyId} />
        </Flex>
      </Flex>
      <Box>
        {job.company.isOwner ? (
          <JobItemOptions job={job} />
        ) : (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant='outline'>View</Button>
            </DialogTrigger>
            <ViewJobItem job={job} setOpen={setOpen} />
          </Dialog>
        )}
      </Box>
    </Flex>
  );
};

JobItem.displayName = 'JobItem';
export default JobItem;
