import { Project } from '@/lib/type';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import StudentAboutInfoItem from './student-about-item';
import { Text } from '@/components/typography/text';

const StudentProjectCard = ({ projects }: { projects?: Project[] }) => {
  const sortedProjects = projects?.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <ul role='list'>
          {sortedProjects?.length! > 0 ? (
            <>
              {sortedProjects?.map((project, index) => (
                <li key={project.title}>
                  <StudentAboutInfoItem
                    title={project.title}
                    description={project.description}
                    link={project.website}
                    startDate={project.startDate}
                    endDate={project.endDate}
                  />
                  {index !== sortedProjects.length - 1 && (
                    <Separator className='my-4' />
                  )}
                </li>
              ))}
            </>
          ) : (
            <li>
              <Text
                as='p'
                size='sm'
                className='text-center'
                color='muted-foreground'
              >
                No project details has been added by the applicant.
              </Text>
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

StudentProjectCard.displayName = 'StudentProjectCard';
export default StudentProjectCard;
