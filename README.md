This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the npm dependencies:

```bash
yarn install
```

Next, copy the `.env.local.example` file as `.env.local` in the root of your project and set the `NEXT_PUBLIC_SITE_URL` variable to your site's public URL:

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Authentication

#### Auth0 project setup
To enable authentication, create an account with [Auth0](https://auth0.com/). Once you've logged in:
1. Create a single page app using React
2. Modify the Login box if you wish but default values are fine
3. Ensure login works within the sandbox

Pretty nifty, right? Next, we will configure Auth0 to work with the app

4. Navigate to the settings tab of your applications dashboard within Auth0
5. Fill in your `.env.local` file with the tokens found on the settings page
   * `NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL` should be set to the `Domain` value with `https://` added to the beginning
6. Set the `Token Endpoint Authentication Method` to `None`
7. Add `http://localhost:3000` to the following settings:
   1. `Allowed Callback URLs` 
   2. `Allowed Logout URLs`
   3. `Allowed Web Origins`
   4. `Allowed Origins (CORS)`
8. Test by starting up the server using `yarn dev` or `npm run dev` and logging in

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

To learn more about the technologies used in this site, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation
- [Auth0](https://auth0.com/docs/) - the Auth0 documentation
