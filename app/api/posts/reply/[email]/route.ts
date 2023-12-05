import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const { email } = params;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const posts = await prisma.post.findMany({
    where: {
      replies: {
        some: {
          userId: user?.id,
        },
      },
    },
    select: {
      id: true,
      type: true,
      content: true,
      createdAt: true,
      userId: true,
      replies: {
        where: {
          userId: user?.id,
        },
      },
      user: {
        select: {
          name: true,
          email: true,
          username: true,
          bio: true,
          image: true,
        },
      },
    },
  });

  return NextResponse.json(posts, { status: 200 });
}
