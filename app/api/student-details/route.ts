import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { currentUser } = await authStatus();

  const studentDetailsExists = await prisma.studentDetails.findUnique({
    where: { studentId: currentUser.id },
  });

  if (studentDetailsExists) {
    const studentDetails = await prisma.studentDetails
      .update({
        where: { studentId: studentDetailsExists.studentId },
        data: {
          ...body,
        },
      })
      .catch((error) => {
        return NextResponse.json(error, { status: 500 });
      });
    return NextResponse.json(studentDetails, { status: 200 });
  }

  const studentDetails = await prisma.studentDetails
    .create({
      data: {
        ...body,
        user: {
          connect: {
            id: currentUser.id,
          },
        },
      },
    })
    .catch((error) => {
      return NextResponse.json(error, { status: 500 });
    });
  return NextResponse.json(studentDetails, { status: 200 });
}
