import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/authentication',
  },
  callbacks: {
    authorized: ({ req, token }) =>
      req.nextUrl.pathname === '/bounty-board' || !!token,
  },
});
