export const authConfig = {
  providers: [],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/admin");
      if (isOnDashboard) {
        // console.log('is on admin');
        if (isLoggedIn) {
          // console.log('is logged in');
          return true;
        }
        // console.log('is not logged in');
        return false;
      } else if (isLoggedIn) {
        // console.log('is not on admin but is logged in');
        return Response.redirect(new URL("/admin", nextUrl));
      }
      return true;
    },
  },
};
