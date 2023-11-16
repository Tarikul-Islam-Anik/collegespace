import authStatus from '@/lib/auth-status';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { currentUser } = await authStatus();

  const liked = await prisma.like.findUnique({
    where: {
      userId_postId: {
        postId: params.postId,
        userId: currentUser.id,
      },
    },
  });

  return NextResponse.json({ liked: !!liked }, { status: 200 });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { currentUser } = await authStatus();

  await prisma.like.create({
    data: {
      userId: currentUser.id,
      postId: params.postId,
    },
  });

  const postOwnerId = await prisma.post.findUnique({
    where: {
      id: params.postId,
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { currentUser } = await authStatus();

  await prisma.like.delete({
    where: {
      userId_postId: {
        postId: params.postId,
        userId: currentUser.id,
      },
    },
  });

  return NextResponse.json({ liked: false }, { status: 200 });
}
