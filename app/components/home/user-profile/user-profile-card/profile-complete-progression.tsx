'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Label } from '@/components/ui/label';
import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { Progress } from '@/components/ui/progress';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/typography/heading';

const ProfileCompleteProgression = ({
  profileData,
}: {
  profileData: Record<string, boolean> | undefined;
}) => {
  const { data: session } = useSession();
  // @ts-ignore
  const role = session?.user?.role === 'student';
  const [progress, setProgress] = useState(0);
  const completed = Object.values(profileData ?? {}).filter(
    (value) => value
  ).length;

  useEffect(() => {
    const timer = setTimeout(
      () => setProgress(profileData ? Math.ceil(completed * 33.33) : 0),
      500
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex
      width='full'
      direction='column'
      justify='center'
      mt={2}
      px={4}
      gap={2}
    >
      <Heading as='h4' size='sm' weight='medium'>
        Complete your profile
      </Heading>
      <Flex gap={2} align='center'>
        <Progress value={progress} />
        <Label className='text-xs text-muted-foreground'>{progress}%</Label>
      </Flex>
      <Text as='p' color='muted-foreground' size='xs'>
        By completing all the details you have a higher chance of
        {role ? ' being seen by recruiters.' : ' building trust.'}
      </Text>
      <Link
        href={'/settings'}
        className={cn(buttonVariants({ variant: 'outline' }), 'text-xs')}
      >
        Add more details
      </Link>
    </Flex>
  );
};

ProfileCompleteProgression.displayName = 'ProfileCompleteProgression';
export default ProfileCompleteProgression;
