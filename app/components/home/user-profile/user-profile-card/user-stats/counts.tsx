import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';

interface CountsProps {
  label: string;
  count: number | undefined;
}

const Counts = ({ label, count }: CountsProps) => {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      className='space-y-0.5'
    >
      <Text size='sm' className='tabular-nums' weight='medium'>
        {count !== undefined
          ? Intl.NumberFormat('en-US', {
              useGrouping: true,
            }).format(count)
          : '---'}
      </Text>
      <Text size='sm' className='text-muted-foreground'>
        {label}
      </Text>
    </Flex>
  );
};

Counts.displayName = 'Counts';
export default Counts;
