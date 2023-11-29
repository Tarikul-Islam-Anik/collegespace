import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';

export async function GET(request: NextRequest) {
  const { currentUser } = await authStatus();

  const company = await prisma.company.findUnique({
    where: {
      ownerId: currentUser.id,
    },
    include: {
      jobs: true,
    },
  });

  return NextResponse.json(company, { status: 200 });
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { currentUser } = await authStatus();

  const companyExists = await prisma.company.findFirst({
    where: {
      ownerId: currentUser.id,
    },
  });

  if (companyExists) {
    const company = await prisma.company.update({
      where: {
        id: currentUser?.company?.id,
      },
      data: { ...body },
    });
    return NextResponse.json(company, { status: 200 });
  } else {
    const company = await prisma.company.create({
      data: {
        ...body,
        owner: { connect: { id: currentUser.id } },
      },
    });
    return NextResponse.json(company, { status: 201 });
  }
}
