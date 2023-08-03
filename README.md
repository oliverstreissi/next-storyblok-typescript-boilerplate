This is a [Next.js](https://nextjs.org/) with TypeScript, Tailwind and Storyblok as headless CMS.

Keep in mind that this boilerplate uses the approach with a client-side wrapper that allows live editing in real time, but don't uses the full potential of React server components!

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Add a .env.local file with the following variables:

```
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your-storyblok-token
```
