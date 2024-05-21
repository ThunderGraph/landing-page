// import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// import type { NextApiRequest, NextApiResponse } from 'next';
// import { NextResponse } from 'next/server';

// export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     await handleLogin(req, res, {
//       authorizationParams: {
//         screen_hint: 'signup',
//       },
//     });
//     return NextResponse.json({ message: 'Login initiated' });
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status((error as any).status || 500).end(error.message);
//     } else {
//       res.status(500).end('An unexpected error occurred');
//     }
//   }
// };


import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth(
    {
    signup: handleLogin({
        authorizationParams: {
          screen_hint: "signup",
        },
        returnTo: "/",
      }),
    }
);
