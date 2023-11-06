import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { email: params.id },
    include: {
      StudentDetails: true,
      EducationalInformation: true,
      Project: true,
    },
  });

  const excludePassword = user && { ...user, password: undefined };

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(excludePassword);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const user = await prisma.user.findUnique({
    where: { email: params.id },
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
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { email: params.id },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({});
}