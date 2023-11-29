import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { currentUser } = await authStatus();

  const body = await request.json();

  const newBounty = await prisma.bounty.create({
    data: {
      ...body,
      user: {
        connect: {
          id: currentUser.id,
        },
      },
    },
  });

  return NextResponse.json(newBounty, { status: 200 });
}
