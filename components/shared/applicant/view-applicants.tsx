import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useApplicants from '@/hooks/useApplicants';
import React from 'react';
import ApplicantItem from './applicant-item';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import Loader from '../loader';
import { Text } from '@/components/typography/text';

const ViewApplicants = ({
  referenceId,
  applicantsFrom,
}: {
  referenceId: string;
  applicantsFrom: 'jobs' | 'bounty';
}) => {
  const { applicants, isLoading } = useApplicants(referenceId, applicantsFrom);
  const totalApplicants = applicants?.length;

  const applicantList = (
    <ScrollArea className='max-h-96'>
      <ul role='list'>
        {applicants?.map((applicant, index) => (
          <>
            <li key={applicant?.id}>
              {applicant && <ApplicantItem user={applicant} />}
            </li>
            {index < applicants.length - 1 && <Separator className='my-4' />}
          </>
        ))}
      </ul>
    </ScrollArea>
  );

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Applicants</DialogTitle>
        <DialogDescription>
          Total applicants: {totalApplicants}
        </DialogDescription>
      </DialogHeader>
      {isLoading ? (
        <Loader />
      ) : totalApplicants === 0 ? (
        <Text align='center'>No applicants yet.</Text>
      ) : (
        applicantList
      )}
    </DialogContent>
  );
};

ViewApplicants.displayName = 'ViewApplicants';
export default ViewApplicants;
