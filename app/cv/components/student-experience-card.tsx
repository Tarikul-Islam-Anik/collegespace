import { Experience } from '@/lib/type';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import StudentAboutInfoItem from './student-about-item';
const StudentExperienceCard = ({
  experiences,
}: {
  experiences?: Experience[];
}) => {
  const sortedExperiences = experiences?.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <ul role='list'>
          {sortedExperiences?.map((experience, index) => (
            <li key={experience.title}>
              <StudentAboutInfoItem
                title={experience.title}
                description={experience.description}
                jobType={'internship'}
                startDate={experience.startDate}
                endDate={experience.endDate}
              />
              {index !== sortedExperiences.length - 1 && (
                <Separator className='my-4' />
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

StudentExperienceCard.displayName = 'StudentExperienceCard';
export default StudentExperienceCard;
