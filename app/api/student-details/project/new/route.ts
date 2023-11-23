import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import authStatus from '@/lib/auth-status';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { currentUser } = await authStatus();

  const project = await prisma.project.create({
    data: {
      ...body,
      student: {
        connect: {
          studentId: currentUser.id,
        },
      },
    },
  });

  return NextResponse.json(project, { status: 201 });
}
