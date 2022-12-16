This is a boilerplate for [Next.js](https://nextjs.org/) + [Storyblok](https://www.storyblok.com/) projects with Typescript and [Tailwind](https://tailwindcss.com/docs/guides/nextjs).

# Getting Started

### 1. Create a new Storyblok space and add the following settings

- Add `https://localhost:3010/` as location (default environment)

### 2. Add needed environment variables

Add a .env file in your root folder with the following environment variables and replace the placeholder with your Storyblok token.

```
STORYBLOK_TOKEN=YOUR_TOKEN
STORYBLOK_VERSION=draft
```

### 3. Install dependencies:

```
npm install
# or
yarn install
```

### 4. Follow the tutorial from Storyblok to set up your dev server with HTTPS proxy

https://www.storyblok.com/faq/setup-dev-server-https-proxy

### 5. Run the development server:

```bash
npm run dev
# or
yarn dev
```
