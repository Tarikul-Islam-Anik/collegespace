import { Flex } from '@/components/layout/flex';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StudentSkillSCard = ({ skills }: { skills?: string }) => {
  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <Flex wrap='wrap' gap={2}>
          {skills
            ? skills
                ?.slice(0, -1)
                ?.split(',')
                .map((skill, index) => (
                  <Badge key={index} variant='secondary' className='text-sm'>
                    {skill}
                  </Badge>
                ))
            : null}
        </Flex>
      </CardContent>
    </Card>
  );
};

StudentSkillSCard.displayName = 'StudentSkillSCard';
export default StudentSkillSCard;
