import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 1;

export async function GET(request: NextRequest) {
  const bounties = await prisma.bounty.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
          bio: true,
          createdAt: true,
          username: true,
          image: true,
        },
      },
    },
  });

  return NextResponse.json(bounties, { status: 200 });
}
