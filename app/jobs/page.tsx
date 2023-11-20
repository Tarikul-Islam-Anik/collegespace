'use client'

import { useSession } from 'next-auth/react';
import StudentView from './components/student-view';
import RecruiterView from './components/recruiter-view';
const JobsPage = () => {
  const { data: session } = useSession();
  //   @ts-ignore
  const role = session?.user?.role;
  return role === 'student' ? <StudentView /> : <RecruiterView />;
};

export default JobsPage;
