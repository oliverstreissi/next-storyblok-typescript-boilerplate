import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { FunctionComponent } from 'react';

export interface ITeaserComponent extends SbBlokData {
  headline: string;
}

const Teaser: FunctionComponent<{
  blok: ITeaserComponent;
}> = ({ blok }) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
