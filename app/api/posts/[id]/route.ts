import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      type: true,
      content: true,
      createdAt: true,
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
  });

  if (!post)
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });

  return NextResponse.json(post, { status: 200 });
}
