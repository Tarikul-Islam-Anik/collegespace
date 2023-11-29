import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { title: string } }
) {
  const { currentUser } = await authStatus();
  await prisma.bounty.delete({
    where: { userId_title: { title: params.title, userId: currentUser.id } },
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
