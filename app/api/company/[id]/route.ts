import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const company = await prisma.company.findUnique({
    where: { id: id },
  });

  return NextResponse.json(company, { status: 200 });
}
