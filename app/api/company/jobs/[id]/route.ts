import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const jobs = await prisma.company.findUnique({
    where: { id: id },
    select: {
      jobs: true,
    },
  });

  return NextResponse.json(jobs, { status: 200 });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { currentUser } = await authStatus();

  const alreadyApplied = await prisma.user.findFirst({
    where: {
      jobs: {
        some: {
          id: id,
        },
      },
    },
  });

  if (alreadyApplied) {
    return NextResponse.json(
      { message: 'You have already applied to this job.' },
      { status: 400 }
    );
  } else {
    const job = await prisma.job.update({
      where: { id: id },
      data: {
        user: {
          connect: {
            id: currentUser?.id,
          },
        },
      },
    });

    const jobPosterId = await prisma.company.findUnique({
      where: { id: job.companyId },
      select: {
        ownerId: true,
      },
    });

    await prisma.notification.create({
      data: {
        interactorId: currentUser?.id,
        content: `${currentUser?.name} has applied to your "${job.title}" job!`,
        user: {
          connect: {
            id: jobPosterId?.ownerId,
          },
        },
      },
    });

    return NextResponse.json(
      { message: 'Applied successfully!' },
      { status: 201 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await prisma.job.delete({
    where: { id: id },
  });

  return NextResponse.json({}, { status: 200 });
}
