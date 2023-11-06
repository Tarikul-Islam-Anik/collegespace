import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { currentUser } = await authStatus();

  const studentDetailsExists = await prisma.studentDetails.findFirst({
    where: { userId: currentUser.id },
  });

  if (studentDetailsExists) {
    const studentDetails = await prisma.studentDetails.update({
      where: { userId: studentDetailsExists.userId },
      data: {
        ...body,
      },
    });
    return NextResponse.json(studentDetails, { status: 200 });
  }

  const studentDetails = await prisma.studentDetails.create({
    data: {
      ...body,
      user: {
        connect: { id: currentUser.id },
      },
    },
  });
  return NextResponse.json(studentDetails, { status: 200 });
}
