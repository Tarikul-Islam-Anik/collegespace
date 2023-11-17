import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const followers = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
    select: {
      followers: {
        select: {
          id: true,
          name: true,
          username: true,
          image: true,
        },
      },
      follows: {
        select: {
          id: true,
          name: true,
          username: true,
          image: true,
        },
      },
    },
  });

  return NextResponse.json(followers, { status: 200 });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { currentUser } = await authStatus();

  const existingFollow = await prisma.user.findFirst({
    where: {
      id: params.id,
      followers: {
        some: {
          id: currentUser?.id,
        },
      },
    },
  });

  if (existingFollow) {
    const user = await prisma.user.update({
      where: { id: params.id },
      data: {
        followers: {
          disconnect: {
            id: currentUser?.id!,
          },
        },
      },
    });
    return NextResponse.json(
      {
        action: 'unfollow',
        message: `You are no longer following ${user?.name}`,
      },
      { status: 200 }
    );
  } else {
    const user = await prisma.user.update({
      where: { id: params.id },
      data: {
        followers: {
          connect: {
            id: currentUser?.id!,
          },
        },
        hasNotification: true,
      },
    });

    await prisma.notification.create({
      data: {
        userId: params.id,
        interactorId: currentUser?.id!,
        content: `${currentUser?.name} is now following you.`,
      },
    });

    return NextResponse.json(
      {
        action: 'follow',
        message: `You are now following ${user?.name}`,
      },
      { status: 200 }
    );
  }
}
