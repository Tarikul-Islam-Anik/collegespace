import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { currentUser } = await authStatus();

  const body = await request.json();

  const newPost = await prisma.post.create({
    data: {
      userId: currentUser.id,
      content: body.content,
      type: body.type,
    },
  });

  return NextResponse.json(newPost, { status: 200 });
}
