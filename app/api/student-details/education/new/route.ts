import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { currentUser } = await authStatus();

  const educationInfo = await prisma.education.create({
    data: {
      ...body,
      student: {
        connect: {
          studentId: currentUser.id,
        },
      },
    },
  });

  return NextResponse.json(educationInfo, { status: 200 });
}
