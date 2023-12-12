import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const jobs = await prisma.$queryRaw`
  SELECT 
    J.*, 
    C.name AS company_name, 
    C.ownerId AS company_ownerId
  FROM 
    collegespace.Job AS J
  INNER JOIN 
    collegespace.Company AS C ON J.companyId = C.id
  ORDER BY
    J.createdAt DESC;`;

  return NextResponse.json({ jobs: jobs }, { status: 200 });
}
