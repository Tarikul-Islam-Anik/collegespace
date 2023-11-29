import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import authStatus from '@/lib/auth-status';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { title: string } }
) {
  const { currentUser } = await authStatus();
  await prisma.project.delete({
    where: {
      studentId_title: {
        studentId: currentUser.id,
        title: params.title,
      },
    },
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
