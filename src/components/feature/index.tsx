import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { FunctionComponent } from 'react';

export interface IFeatureComponent extends SbBlokData {
  name: string;
}

const Feature: FunctionComponent<{ blok: IFeatureComponent }> = ({ blok }) => {
  return <div {...storyblokEditable(blok)}>{blok.name}</div>;
};

export default Feature;
