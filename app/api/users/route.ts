import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
      bio: true,
      image: true,
      createdAt: true,
      _count: { select: { followers: true, follows: true, posts: true } },
    },
  });

  return NextResponse.json(users, { status: 200 });
}
