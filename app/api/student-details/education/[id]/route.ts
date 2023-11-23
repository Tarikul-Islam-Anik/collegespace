import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await prisma.education.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({}, { status: 200 });
}
