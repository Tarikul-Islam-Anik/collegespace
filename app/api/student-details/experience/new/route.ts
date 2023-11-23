import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { currentUser } = await authStatus();

  const experience = await prisma.experience.create({
    data: {
      ...body,
      student: {
        connect: {
          studentId: currentUser.id,
        },
      },
    },
  });

  return NextResponse.json(experience, { status: 200 });
}
