import { FunctionComponent } from 'react';
import { StoryblokComponent } from 'storyblok-js-client';
import SbEditable from 'storyblok-react';
import Page from '@components/page';
import Grid from '@components/grid';
import Feature from '@components/feature';
import Teaser from '@components/teaser';
import { sbEditable } from '@storyblok/storyblok-editable';

interface DynamicComponentProps {
  blok: StoryblokComponent<string>;
}

// resolve Storyblok components to Next.js components
const Components: any = {
  page: Page,
  grid: Grid,
  feature: Feature,
  teaser: Teaser,
};

const DynamicComponent: FunctionComponent<DynamicComponentProps> = ({
  blok,
}) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];

    return (
      <div {...sbEditable(blok)}>
        <Component blok={blok} key={blok._uid} />
      </div>
    );
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
