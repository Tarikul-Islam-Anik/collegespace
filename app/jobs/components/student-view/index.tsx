import StudentTabs from './student-tabs';
import { Container } from '@/components/layout/container';
import SectionHeading from '@/components/shared/section-heading';

const StudentView = () => {
  return (
    <Container>
      <SectionHeading
        title='Jobs & Bounties'
        description='Find all types of jobs and bounties for only for you.'
      />
      <StudentTabs />
    </Container>
  );
};

StudentView.displayName = 'StudentView';
export default StudentView;
