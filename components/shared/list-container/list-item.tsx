import { format } from 'date-fns';
import { Project, Education, Experience } from '@/lib/type';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { Heading } from '@/components/typography/heading';
import DeleteListItem from './list-actions/delete-item';

type EducationInfoItemProps = {
  type: 'education';
  item: Education;
};
type ProjectItemProps = {
  type: 'project';
  item: Project;
};
type ExperienceItemProps = {
  type: 'experience';
  item: Experience;
};
type ListItemProps =
  | EducationInfoItemProps
  | ProjectItemProps
  | ExperienceItemProps;

const ListItem = ({ type, item }: ListItemProps) => {
  return (
    <Flex align='center' justify='between'>
      <Flex direction='column' className='w-5/6 space-y-0.5'>
        <Heading as='h4' weight='medium'>
          {type === 'education' ? item.school : item.title}
        </Heading>
        <Text as='p' size='sm' className='line-clamp-3'>
          {type === 'education' ? item.field : item.description}
        </Text>
        <Text size='sm' color='muted-foreground'>
          <time dateTime={new Date(item.startDate).toISOString().split('T')[0]}>
            {format(new Date(item.startDate), 'MMMM yyyy')}{' '}
          </time>{' '}
          -{' '}
          <time dateTime={new Date(item.endDate).toISOString().split('T')[0]}>
            {format(new Date(item.startDate), 'MMMM yyyy')}
          </time>
        </Text>
        {type === 'education' && (
          <Text as='p' size='sm'>
            Grade: <Text>{item.grade}</Text>
          </Text>
        )}
      </Flex>
      <DeleteListItem
        type={type}
        reference={type === 'education' ? item.id : item.title}
      />
    </Flex>
  );
};

ListItem.displayName = 'ListItem';
export default ListItem;
