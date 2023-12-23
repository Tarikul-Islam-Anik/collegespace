import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const { currentUser } = await authStatus();
  const email =
    params.email !== 'currentUser' ? params.email : currentUser.email;

  const user = await prisma.user.findUnique({
    where: { email: email! },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      image: true,
      bio: true,
      role: true,
      coverImage: true,
      createdAt: true,
      bounties: true,
      _count: { select: { followers: true, follows: true, posts: true } },
    },
  });

  const isFollowedByCurrentUser = await prisma.user.findUnique({
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

  const isFollowing = isFollowedByCurrentUser?.follows.some(
    (following) => following.id === user?.id
  );

  const userWithFollowings = { ...user, isFollowing };

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(userWithFollowings);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const body = await request.json();

  const user = await prisma.user.findUnique({
    where: { email: params.email },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      ...body,
    },
  });

  const excludePassword = updatedUser && {
    ...updatedUser,
    password: undefined,
  };

  return NextResponse.json(excludePassword);
}
