import { Flex } from '@/components/layout/flex';
import BountyItem from './bounty-item';

const dummyBounties = [
  {
    title: 'Mathematics Tutoring for High School Students',
    reward: '৳1500',
    deadline: '2023-12-15T00:00:00Z',
  },
  {
    title: 'Logo Design for Small Business',
    reward: '৳2500',
    deadline: '2024-01-05T00:00:00Z',
  },
  {
    title: 'Help with Python Programming Assignment',
    reward: '৳2000',
    deadline: '2023-12-20T00:00:00Z',
  },
  {
    title: 'English Language Proofreading Assistance',
    reward: '৳1250',
    deadline: '2023-12-25T00:00:00Z',
  },
  {
    title: 'Physics Problem Solving Guide',
    reward: '৳1750',
    deadline: '2024-01-10T00:00:00Z',
  },
  {
    title: 'Graphic Design for Social Media Banner',
    reward: '৳2250',
    deadline: '2023-12-30T00:00:00Z',
  },
  {
    title: 'Online Algebra Crash Course',
    reward: '৳2750',
    deadline: '2024-01-08T00:00:00Z',
  },
  {
    title: 'Chemistry Homework Help',
    reward: '৳1500',
    deadline: '2023-12-18T00:00:00Z',
  },
  {
    title: 'Web Development Consultation',
    reward: '৳3000',
    deadline: '2024-01-03T00:00:00Z',
  },
  {
    title: 'Essay Writing Support',
    reward: '৳2000',
    deadline: '2023-12-23T00:00:00Z',
  },
];

const BountyList = () => {
  return (
    <Flex direction='column'>
      {dummyBounties.map((bounty) => (
        <BountyItem key={bounty.title} {...bounty} />
      ))}
    </Flex>
  );
};

export default BountyList;
