import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const user = await prisma.user.findUnique({
    where: { email: params.email },
    select: {
      posts: {
        select: {
          id: true,
          type: true,
          content: true,
          createdAt: true,
          user: { select: { name: true, email: true, image: true } },
          _count: { select: { likes: true, replies: true, reposts: true } },
        },
        orderBy: { createdAt: 'desc' },
      },
    },
  });

  if (!user)
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });

  return NextResponse.json(user.posts, { status: 200 });
}
