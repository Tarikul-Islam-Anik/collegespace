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
  const start = new Date(startDate);
  const end = new Date(endDate);
  return (
    <Flex align='center' className='gap-1.5 text-muted-foreground'>
      <Calendar size='16' />
      <Text size='sm'>
        <time dateTime={start.toISOString()}>{format(start, 'MMMM yyyy')}</time>
        {' - '}
        <time dateTime={end.toISOString()}>{format(end, 'MMMM yyyy')}</time>
      </Text>
    </Flex>
  );
};

export default YearRange;
