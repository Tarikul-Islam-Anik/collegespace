import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StudentInfoCard = ({
  informations,
}: {
  informations: Record<string, string | undefined | number | null | Date>;
}) => {
  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle>Information</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4 text-sm'>
        {Object.entries(informations).map(([key, value]) => {
          if (!value) return null;
          return (
            <dl key={key} className='flex justify-between capitalize'>
              <dt className='text-muted-foreground'>
                {key === 'dob'
                  ? 'Date of birth'
                  : key === 'email'
                  ? 'Email'
                  : key}
              </dt>
              {key === 'email' ? (
                <a href={`mailto:${value}`}>
                  <dd className='lg:w-36 truncate text-right font-medium lowercase'>
                    {value as string}
                  </dd>
                </a>
              ) : (
                <dd className='text-right font-medium'>
                  {typeof value === 'string' && key !== 'dob' && value}
                  {typeof value === 'number' &&
                    value.toString() + ' year' + (value > 1 ? 's' : '')}
                  {key === 'dob' && format(new Date(value), 'dd MMM, yyyy')}
                </dd>
              )}
            </dl>
          );
        })}
      </CardContent>
    </Card>
  );
};

StudentInfoCard.displayName = 'StudentInfoCard';
export default StudentInfoCard;
