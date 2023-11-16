import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import authStatus from '@/lib/auth-status';

export async function GET(request: NextRequest) {
  const { currentUser } = await authStatus();

  const notifications = await prisma.notification.findMany({
    where: {
      userId: currentUser.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(notifications, { status: 200 });
}
