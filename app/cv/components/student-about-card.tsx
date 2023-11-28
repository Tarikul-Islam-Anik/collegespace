import { Text } from '@/components/typography/text';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

const StudentAboutCard = ({ about }: { about?: string }) => {
  return (
    <Card className='relative overflow-hidden shadow-none lg:h-[300px]'>
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent>
        <Text as='p' size='sm' className='line-clamp-[9]'>
          {about}
        </Text>
      </CardContent>
      <CardFooter className='bottom-0 w-full p-0 lg:absolute'>
        <TabsList className='w-full justify-around rounded-none border-b bg-transparent p-0'>
          {['educations', 'projects', 'experiences'].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className='w-full rounded-none pb-2 capitalize data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none'
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </CardFooter>
    </Card>
  );
};

StudentAboutCard.displayName = 'StudentAboutCard';
export default StudentAboutCard;
