import authStatus from '@/lib/auth-status';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { currentUser } = await authStatus();
  const body = await request.json();

  await prisma.like.create({
    data: {
      userId: currentUser.id,
      postId: body.id,
    },
  });

  const postOwnerId = await prisma.post.findUnique({
    where: {
      id: body.id,
    },
    select: {
      userId: true,
    },
  });

  if (postOwnerId?.userId !== currentUser.id) {
    await prisma.notification.create({
      data: {
        userId: postOwnerId!.userId,
        content: `${currentUser.name} liked your post`,
      },
    });
  }

  return NextResponse.json({ liked: true }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const { currentUser } = await authStatus();
  const body = await request.json();

  await prisma.like.delete({
    where: {
      userId_postId: {
        postId: body.id,
        userId: currentUser.id,
      },
    },
  });

  return NextResponse.json({ liked: false }, { status: 200 });
}
