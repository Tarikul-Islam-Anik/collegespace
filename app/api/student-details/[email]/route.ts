import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const user = await prisma.user.findUnique({
    where: { email: params.email },
    select: {
      name: true,
      email: true,
      phone: true,
      image: true,
      coverImage: true,
      bio: true,
      studentDetails: {
        include: {
          educations: true,
          projects: true,
          experiences: true,
        },
      },
    },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(user);
}
