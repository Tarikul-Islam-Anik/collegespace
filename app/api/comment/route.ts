import authStatus from '@/lib/auth-status';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { currentUser } = await authStatus();
  const body = await request.json();

  await prisma.comment.create({
    data: {
      ...body,
      userId: currentUser.id,
    },
  });
  return NextResponse.json({}, { status: 200 });
}
