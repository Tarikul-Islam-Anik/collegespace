import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import authStatus from '@/lib/auth-status';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { currentUser } = await authStatus();

  const repost = await prisma.repost.findFirst({
    where: {
      userId: currentUser.id,
      postId: body.postId,
    },
  });

  if (repost) {
    return NextResponse.json(
      {
        error: 'You have already reposted this post',
      },
      { status: 400 }
    );
  }

  const newRepost = await prisma.repost.create({
    data: {
      userId: currentUser.id,
      postId: body.postId,
    },
  });

  return NextResponse.json(newRepost, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const { currentUser } = await authStatus();

  const repost = await prisma.repost.findFirst({
    where: {
      userId: currentUser.id,
      postId: body.postId,
    },
  });

  if (!repost) {
    return NextResponse.json(
      {
        error: 'You have not reposted this post',
      },
      { status: 400 }
    );
  }

  const deletedRepost = await prisma.repost.delete({
    where: {
      userId_postId: {
        userId: currentUser.id,
        postId: body.postId,
      },
    },
  });

  return NextResponse.json(deletedRepost, { status: 200 });
}
