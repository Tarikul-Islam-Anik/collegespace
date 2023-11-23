import { Box } from '../layout/box';

const DescriptionList = ({ name, value }: { name: any; value: any }) => {
  return (
    value && (
      <Box className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
        <dt className='text-sm font-medium capitalize leading-6'>{name}</dt>
        <dd className='mt-1 text-sm leading-6 text-muted-foreground sm:col-span-2 sm:mt-0'>
          {value}
        </dd>
      </Box>
    )
  );
};

DescriptionList.displayName = 'DescriptionList';
export default DescriptionList;
