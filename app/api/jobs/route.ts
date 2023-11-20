import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const jobs = await prisma.job.findMany({
    include: {
      company: {
        select: {
          name: true,
        },
      },
    },
  });

  return NextResponse.json({ jobs: jobs }, { status: 200 });
}
