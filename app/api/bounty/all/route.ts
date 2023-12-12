import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const bounties = await prisma.$queryRaw`
  SELECT 
    B.*, 
    U.name AS creator_name, 
    U.email AS creator_email,
    U.bio AS creator_bio,
    U.createdAt AS creator_createdAt,
    U.username AS creator_username, 
    U.image AS creator_image
  FROM
    collegespace.Bounty AS B
  INNER JOIN
    collegespace.User AS U ON B.userId = U.id
  ORDER BY
    B.createdAt DESC;`;

  return NextResponse.json(bounties, { status: 200 });
}
