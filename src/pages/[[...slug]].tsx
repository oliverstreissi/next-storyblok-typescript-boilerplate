import React from 'react';
import DynamicComponent from '@components/dynamic-component';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Storyblok, { useStoryblok } from '../lib/storyblok';
import { Params } from 'next/dist/server/router';
import { StoryData } from 'storyblok-js-client';

export interface PageProps {
  story: StoryData;
  preview: boolean;
}

export interface SBParams {
  version: string;
  cv?: number;
}

const Page: NextPage<PageProps> = ({ story, preview }) => {
  const enableBridge = preview; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode
  story = useStoryblok(story, enableBridge);

  return (
    <div>
      <Head>
        <title>{story ? story.name : 'My Site'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center text-3xl font-bold">
        <h1>{story ? story.name : 'My Site'}</h1>
      </header>

      <DynamicComponent blok={story.content} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  const preview = context.preview || null;

  // join the slug array used in Next.js catch-all routes
  let slug = params.slug ? params.slug.join('/') : 'home';

  let sbParams: SBParams = {
    // change to `published` to load the published version
    version: 'published', // or draft
  };

  if (preview) {
    // set the version to draft in the preview mode
    sbParams.version = 'draft';
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // get all links from Storyblok
  let { data } = await Storyblok.get('cdn/links/');

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
