import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { currentUser } = await authStatus();

  const followings = await prisma.user.findUnique({
    where: {
      id: currentUser?.id,
    },
    select: {
      follows: {
        select: {
          id: true,
        },
      },
    },
  });

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

  const usersWithFollowings = users.map((user) => {
    const isFollowing = followings?.follows.some(
      (following) => following.id === user.id
    );
    return { ...user, isFollowing };
  });

  return NextResponse.json(usersWithFollowings, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const { currentUser } = await authStatus();

  await prisma.user.delete({
    where: {
      id: currentUser?.id,
    },
  });

  return NextResponse.json(
    {
      userId: currentUser.id,
      message: `User "${currentUser.name}" deleted successfully`,
    },
    { status: 200 }
  );
}
