import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { currentUser } = await authStatus();

  const user = await prisma.user.findUnique({
    where: { id: currentUser.id },
    select: {
      bounties: true,
    },
  });

  const bounties = user?.bounties.map((bounty) => {
    return {
      ...bounty,
      creator_email: currentUser.email,
    };
  });

  return NextResponse.json(bounties, { status: 200 });
}
