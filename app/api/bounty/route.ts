import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 1;

export async function GET(request: NextRequest) {
  const bounties = await prisma.bounty.findMany({
    select: {
      title: true,
      description: true,
      reward: true,
      deadline: true,
      createdAt: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          bio: true,
          username: true,
          createdAt: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(bounties, { status: 200 });
}
