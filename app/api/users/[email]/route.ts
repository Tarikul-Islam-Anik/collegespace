import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const user = await prisma.user.findUnique({
    where: { email: params.email },
    select: {
      name: true,
      username: true,
      email: true,
      image: true,
      bio: true,
      role: true,
      coverImage: true,
      createdAt: true,
      company: true,
      _count: { select: { followers: true, follows: true, posts: true } },
    },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(user);
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const user = await prisma.user.findUnique({
    where: { email: params.email },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({}, { status: 200 });
}
