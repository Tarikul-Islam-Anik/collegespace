import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const posts = await prisma.user.findUnique({
    where: { email: params.email },
    select: {
      posts: {
        include: {
          user: {
            select: {
              name: true,
              email: true,
              image: true,
            },
          },
          _count: { select: { likes: true, replies: true, reposts: true } },
        },
        orderBy: { createdAt: 'desc' },
      },
    },
  });

  if (!posts)
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });

  return NextResponse.json(posts, { status: 200 });
}
