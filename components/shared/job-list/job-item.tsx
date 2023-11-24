'use client';
import { Location } from 'iconsax-react';
import { JobType } from '@/lib/type';
import useUser from '@/hooks/useUser';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { Heading } from '@/components/typography/heading';
import { Button } from '@/components/ui/button';
import RemoveJobItem from './remove-job-item';
import ViewJobItem from './view-job-item';
import CompanyDetails from '../company-details';

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
  const { user } = useUser();
  const isOwner = user?.company && user?.company.id === job.companyId;

  return (
    <Flex justify='between' align={'center'}>
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
          <Flex align='center' className='max-w-[290px]'>
            <Location size={12} className='mr-1' />
            <Text as='p' className='truncate'>
              {job.location}
            </Text>
          </Flex>
          <Text size='xs'>&bull;</Text>
          <Text className='capitalize'>{jobType(job.type)}</Text>
          {!isOwner && (
            <>
              <Text size='xs'>&bull;</Text>
              <CompanyDetails name={job.company.name} id={job.companyId} />
            </>
          )}
        </Flex>
      </Flex>
      {isOwner ? (
        <Flex gap={2}>
          <Button size='sm' variant='outline'>
            View applicants
          </Button>
          <RemoveJobItem jobId={job.id} companyId={job.companyId} />
        </Flex>
      ) : (
        <ViewJobItem job={job} />
      )}
    </Flex>
  );
};

JobItem.displayName = 'JobItem';
export default JobItem;
