import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const bounties = await prisma.$queryRaw`
  SELECT 
    B.*, 
    U.name AS user_name, 
    U.username AS user_username, 
    U.image AS user_image
  FROM
    collegespace.Bounty AS B
  INNER JOIN
    collegespace.User AS U ON B.userId = U.id
  ORDER BY
    B.createdAt DESC;`;

  return NextResponse.json(bounties, { status: 200 });
}
