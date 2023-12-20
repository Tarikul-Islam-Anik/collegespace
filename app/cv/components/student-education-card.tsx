import { Education } from '@/lib/type';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import StudentAboutInfoItem from './student-about-item';
import { Text } from '@/components/typography/text';

const StudentEducationCard = ({ educations }: { educations?: Education[] }) => {
  const sortedEducations = educations?.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle>Educations</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <ul role='list'>
          {sortedEducations?.length! > 0 ? (
            <>
              {sortedEducations?.map((education, index) => (
                <li key={education.id}>
                  <StudentAboutInfoItem
                    title={education.degree + ' in ' + education.field}
                    school={education.school}
                    startDate={education.startDate}
                    endDate={education.endDate}
                  />
                  {index !== sortedEducations.length - 1 && (
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
                No education details has been added by the applicant.
              </Text>
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

StudentEducationCard.displayName = 'StudentEducationCard';
export default StudentEducationCard;
