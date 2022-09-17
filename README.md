This is a boilerplate for [Next.js](https://nextjs.org/) + [Storyblok](https://www.storyblok.com/) projects with Typescript and [Tailwind](https://tailwindcss.com/docs/guides/nextjs).

# Getting Started

### 1. Create a new Storyblok space and add the following settings

- Add https://localhost:3010/ as location (default environment)
- Add a preview url called "Preview" and copy and paste this url: https://localhost:3010/api/preview?secret=MY_SECRET_TOKEN&slug=
- Replace 'MY_SECRET_TOKEN' in the url with your own secret.
- Add a preview url called "Exit Preview" with and copy and paste this url: https://localhost:3010/api/exit-preview?slug=

### 2. Add needed environment variables

Add a .env file in your root folder with the following environment variables and replace the placeholders with your Storyblok token and secret.

```
STORYBLOK_PREVIEW_TOKEN=YOUR_TOKEN
STORYBLOK_SECRET_TOKEN=YOUR_SECRET
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
