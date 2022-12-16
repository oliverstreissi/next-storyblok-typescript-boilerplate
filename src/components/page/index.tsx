import { SbBlokData, StoryblokComponent } from '@storyblok/react';
import { FunctionComponent } from 'react';

export interface IPageComponent extends SbBlokData {
  body: SbBlokData[];
}

const Page: FunctionComponent<{ blok: IPageComponent }> = ({ blok }) => {
  return (
    <main className="container flex flex-col items-center">
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
