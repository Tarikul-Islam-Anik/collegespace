'use client';

import StudentMediaCard from '../components/student-media-card';
import { Box } from '@/components/layout/box';
import StudentInfoCard from '../components/student-info-card';
import StudentSkillSCard from '../components/student-skills-card';
import { Grid } from '@/components/layout/grid';
import StudentAboutCard from '../components/student-about-card';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import StudentEducationCard from '../components/student-education-card';
import StudentProjectCard from '../components/student-project-card';
import StudentExperienceCard from '../components/student-experience-card';
import useStudentDetails from '@/hooks/useStudentDetails';
import Loader from '@/components/shared/loader';

export default function CVPage({ params }: { params: { email: string } }) {
  const { data, isLoading } = useStudentDetails(params.email);

  if (isLoading) {
    return <Loader className='h-96' />;
  }
  const studentDetails = data?.studentDetails;

  const informations = {
    email: data?.email,
    phone: data?.phone,
    experience: studentDetails?.experience,
    country: studentDetails?.country,
    gender: studentDetails?.gender,
    dob: studentDetails?.dob,
  };

  const tabsContent = [
    {
      name: 'educations',
      component: (
        <StudentEducationCard educations={studentDetails?.educations} />
      ),
    },
    {
      name: 'projects',
      component: <StudentProjectCard projects={studentDetails?.projects} />,
    },
    {
      name: 'experiences',
      component: (
        <StudentExperienceCard experiences={studentDetails?.experiences} />
      ),
    },
  ];

  return (
    <Grid cols={1} className='gap-4 lg:grid-cols-3 lg:space-x-4'>
      <Box className='space-y-4 lg:w-64'>
        <StudentMediaCard
          name={data?.name!}
          image={data?.image!}
          coverImage={data?.coverImage!}
          bio={data?.bio!}
        />
        <StudentInfoCard informations={informations} />
        <StudentSkillSCard skills={studentDetails?.skills} />
      </Box>
      <Box className='lg:col-span-2'>
        <Tabs
          defaultValue='educations'
          className='mx-auto flex w-full flex-col items-center space-y-4'
        >
          <StudentAboutCard about={studentDetails?.about!} />
          {tabsContent.map((tab) => (
            <TabsContent key={tab.name} value={tab.name} className='w-full'>
              {tab.component}
            </TabsContent>
          ))}
        </Tabs>
      </Box>
    </Grid>
  );
}
