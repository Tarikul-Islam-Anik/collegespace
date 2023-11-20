import { JobType } from '@/lib/type';
import JobItem from './job-item';
import { Separator } from '@/components/ui/separator';

const JobList = ({ jobs }: { jobs: JobType[] | undefined }) => {
  return (
    <ul role='list'>
      {jobs?.map((job, index) => (
        <li key={job.id}>
          <JobItem job={job} />
          {index !== jobs.length - 1 && <Separator className='my-4' />}
        </li>
      ))}
    </ul>
  );
};

JobList.displayName = 'JobList';
export default JobList;
