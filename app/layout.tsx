import {
  ISbStoriesParams,
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
} from "@storyblok/react/rsc";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoryblokProvider from "@/components/StoryblokProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoryblokProvider>
  );
}

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get("cdn/stories/home", sbParams);
}
