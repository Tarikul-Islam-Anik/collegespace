import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const jobs = await prisma.job.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      company: {
        select: {
          name: true,
          ownerId: true,
        },
      },
    },
  });

  return NextResponse.json({ jobs: jobs }, { status: 200 });
}
