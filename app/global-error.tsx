"use client"

import { Flex } from '@/components/layout/flex';
import { Heading } from '@/components/typography/heading';
import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Flex justify='center' align='center' height='screen'>
          <Heading as='h2'>Something went wrong!</Heading>
          <Button onClick={() => reset()}>Try again</Button>
        </Flex>
      </body>
    </html>
  );
}
