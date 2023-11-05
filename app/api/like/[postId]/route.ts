import authStatus from '@/lib/auth-status';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { currentUser } = await authStatus();

  const liked = await prisma.like.findUnique({
    where: {
      userId_postId: {
        postId: params.postId,
        userId: currentUser.id,
      },
    },
  });

  return NextResponse.json({ liked: !!liked }, { status: 200 });
}
