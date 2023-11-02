import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import authStatus from '@/lib/auth-status';

export async function GET(request: NextRequest) {
  const { currentUser } = await authStatus();

  const posts = await prisma.post.findMany({
    where: {
      userId: currentUser.id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
          createdAt: true,
        },
      },
      likes: {
        select: {
          userId: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(posts, { status: 200 });
}
