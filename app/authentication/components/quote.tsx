'use client';
import { Box } from '@/components/layout/box';
import { Text } from '@/components/typography/text';
import { Blockquote } from '@/components/typography/blockquote';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

type QuoteResponseType = {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
};

const endpoint = 'https://api.quotable.io/quotes/random?tags=technology';

const Quote = () => {
  const { data: quote } = useSWR<QuoteResponseType[]>(endpoint, fetcher);

  return quote ? (
    <Box position='relative' className='z-20 mt-auto'>
      <Blockquote className='space-y-2'>
        &ldquo;
        <Text>{quote[0]?.content}</Text>
        &rdquo;
        <footer className='text-sm'>{quote[0]?.author}</footer>
      </Blockquote>
    </Box>
  ) : null;
};

Quote.displayName = 'Quote';
export default Quote;
