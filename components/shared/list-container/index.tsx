import { Project, Education, Experience } from '@/lib/type';
import ListItem from './list-item';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export type EducationInfoListProps = {
  type: 'education';
  items: Education[];
};
export type ProjectListProps = {
  type: 'project';
  items: Project[];
};
export type ExperienceListProps = {
  type: 'experience';
  items: Experience[];
};

type ListContainerProps = (
  | EducationInfoListProps
  | ProjectListProps
  | ExperienceListProps
) & {
  className?: string;
};

const ListContainer = ({ type, items, className }: ListContainerProps) => {
  return (
    <ScrollArea className={className}>
      <ul role='list'>
        {items.map((item, index) => (
          <li key={index}>
            {index !== 0 && <Separator className='my-4' />}
            {type === 'education' ? (
              <ListItem type='education' item={item as Education} />
            ) : type === 'project' ? (
              <ListItem type='project' item={item as Project} />
            ) : (
              <ListItem type='experience' item={item as Experience} />
            )}
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};

ListContainer.displayName = 'ListContainer';
export default ListContainer;
