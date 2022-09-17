import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  getStoryblokApi,
  StoryblokComponent,
  StoryData,
  useStoryblokState,
} from '@storyblok/react';

export interface PageProps {
  story: StoryData;
  preview: boolean;
}

export interface SBParams {
  version: string;
  cv?: number;
}

const Page: NextPage<PageProps> = ({ story, preview }) => {
  story = useStoryblokState(story, {}, preview);

  return (
    <div>
      <Head>
        <title>{story ? story.name : 'My Site'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center text-3xl font-bold">
        <h1>{story ? story.name : 'My Site'}</h1>
      </header>

      <StoryblokComponent blok={story.content} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  let slug =
    params && params.slug ? (params.slug as string[]).join('/') : 'home';

  let sbParams: SBParams = {
    version: process.env.STORYBLOK_PREVIEW_TOKEN
      ? process.env.STORYBLOK_PREVIEW_TOKEN
      : 'published',
  };

  if (preview) {
    sbParams.version = 'draft';
  }

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: preview || false,
    },
    revalidate: 3600, // revalidate every hour
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // get all links from Storyblok
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/links/');

  let paths: any = [];
  // create a routes for every link
  Object.keys(data.links).forEach((linkKey) => {
    // do not create a route for folders
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split('/');
    if (slug === 'home') splittedSlug = false;

    // cretes all the routes
    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export default Page;
