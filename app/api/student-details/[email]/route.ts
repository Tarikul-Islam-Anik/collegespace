import prisma from '@/lib/prisma';
import authStatus from '@/lib/auth-status';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const { currentUser } = await authStatus();
  const email =
    params.email !== 'currentUser' ? params.email : currentUser.email;
  const user = await prisma.user.findUnique({
    where: { email: email! },
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
