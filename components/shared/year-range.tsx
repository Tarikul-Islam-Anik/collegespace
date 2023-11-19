import { format } from 'date-fns';
import { Calendar } from 'iconsax-react';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';

const YearRange = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) => {
  return (
    <Flex align='center' className='gap-1.5 text-muted-foreground'>
      <Calendar size='16' />
      <Text size='sm'>
        <time dateTime={startDate.toISOString()}>
          {format(startDate, 'MMMM yyyy')}
        </time>
        {' - '}
        <time dateTime={endDate.toISOString()}>
          {format(endDate, 'MMMM yyyy')}
        </time>
      </Text>
    </Flex>
  );
};

export default YearRange;
