import { FunctionComponent } from 'react';
import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';

export interface IGridComponent extends SbBlokData {
  columns: SbBlokData[];
}

const Grid: FunctionComponent<{ blok: IGridComponent }> = ({ blok }) => {
  return (
    <div
      className="flex flex-col items-center justify-center flex-wrap max-w-3xl mt-12"
      {...storyblokEditable(blok)}
    >
      {blok.columns.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Grid;
