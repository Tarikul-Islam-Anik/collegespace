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
      username: true,
      image: true,
      createdAt: true,
    },
  });

  return NextResponse.json(users, { status: 200 });
}
