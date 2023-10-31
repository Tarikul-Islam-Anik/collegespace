'use client';
import axios from 'axios';
import { Box, Blockquote, Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

type QuoteResponseType = {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
};

const Quote = () => {
  const [quote, setQuote] = useState<QuoteResponseType>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get<QuoteResponseType[]>(
        'https://api.quotable.io/quotes/random?tags=technology,famous-quotes'
      );
      setQuote(result.data[0]);
    };
    fetchData();
  }, []);

  return (
    <Box className='relative z-20 mt-auto'>
      <Blockquote className='space-y-2'>
        <Text size='4'>{quote?.content}</Text>
        <footer className='text-sm'>{quote?.author}</footer>
      </Blockquote>
    </Box>
  );
};

Quote.displayName = 'Quote';
export default Quote;
