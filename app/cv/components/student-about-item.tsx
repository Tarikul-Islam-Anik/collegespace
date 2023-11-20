import Link from 'next/link';
import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Text } from '@/components/typography/text';
import { buttonVariants } from '@/components/ui/button';
import YearRange from '@/components/shared/year-range';
import { GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface StudentInfoItemProps {
  title: string;
  description?: string;
  school?: string;
  link?: string | null;
  jobType?:
    | 'internship'
    | 'fulltime'
    | 'parttime'
    | 'contract'
    | 'freelance'
    | 'volunteer'
    | 'remote'
    | 'temporary'
    | 'other'
    | null;
  startDate: Date;
  endDate: Date;
}

const StudentAboutInfoItem = ({
  title,
  description,
  school,
  link,
  jobType,
  startDate,
  endDate,
}: StudentInfoItemProps) => {
  return (
    <Box>
      <Heading as='h4' className='mb-1.5' weight='medium'>
        {title}
      </Heading>
      <Text as='p' size='sm' color='muted-foreground'>
        {description}
      </Text>
      <Flex
        align='center'
        justify='between'
        mt={4}
        className='text-muted-foreground'
      >
        <Flex align='center' className='gap-1.5'>
          {link && (
            <Link
              href={link}
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              View Project
            </Link>
          )}
          {school && (
            <>
              <GraduationCap size='16' />
              <Text as='p' size='sm'>
                {school}
              </Text>
            </>
          )}
          {jobType && (
            <Badge variant='outline' className='capitalize'>
              {jobType}
            </Badge>
          )}
        </Flex>
        <YearRange startDate={startDate} endDate={endDate} />
      </Flex>
    </Box>
  );
};

StudentAboutInfoItem.displayName = 'StudentAboutInfoItem';
export default StudentAboutInfoItem;
