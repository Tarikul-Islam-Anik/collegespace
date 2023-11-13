import prisma from './prisma';
import { authOptions } from './auth-options';
import { getServerSession } from 'next-auth';
import { User } from '@/lib/type';

const authStatus = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error('Not signed in');
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      Company: {
        select: {
          id: true,
        },
      },
    },
  });

  if (!currentUser) {
    throw new Error('Not signed in');
  }
  const excludePassword =
    currentUser &&
    ({
      ...currentUser,
      password: null,
    } satisfies User);

  return { currentUser: excludePassword };
};

export default authStatus;
