import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { currentUser } = await authStatus();

  const companyExists = await prisma.company.findUnique({
    where: {
      id: currentUser.company[0].id,
    },
  });

  if (companyExists) {
    const company = await prisma.company.update({
      where: {
        id: currentUser.company[0].id,
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
