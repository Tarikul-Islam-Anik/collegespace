import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { jobId: string } }
) {
  const { jobId } = params;
  const jobs = await prisma.job.findUnique({
    where: { id: jobId },
    select: {
      user: {
        select: {
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });
  return NextResponse.json(jobs?.user, { status: 200 });
}
