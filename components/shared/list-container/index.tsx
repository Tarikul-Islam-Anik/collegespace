import { Project, Education } from '@/lib/type';
import ListItem from './list-item';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

type EducationInfoListProps = {
  type: 'education';
  items: Education[];
};
type ProjectListProps = {
  type: 'project';
  items: Project[];
};

type ListContainerProps = (EducationInfoListProps | ProjectListProps) & {
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
              <ListItem
                type='education'
                item={item as Education}
              />
            ) : (
              <ListItem type='project' item={item as Project} />
            )}
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};

ListContainer.displayName = 'ListContainer';
export default ListContainer;
