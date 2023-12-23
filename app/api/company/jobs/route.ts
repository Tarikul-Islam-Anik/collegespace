import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 1;

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

  return NextResponse.json(jobs, { status: 200 });
}
