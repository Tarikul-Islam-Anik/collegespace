import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { currentUser } = await authStatus();

  const companyExists = await prisma.company.findFirst({
    where: {
      ownerId: currentUser.id,
    },
  });

  if (companyExists) {
    const job = await prisma.job.create({
      data: {
        ...body,
        company: {
          connect: { id: companyExists.id },
        },
      },
    });
    return NextResponse.json(job, { status: 200 });
  } else {
    return NextResponse.json(
      { error: 'You must create a company before creating a job' },
      { status: 400 }
    );
  }
}
