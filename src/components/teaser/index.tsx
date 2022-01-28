import { FunctionComponent } from 'react';
import { TeaserComponent } from 'src/models/sb-teaser.model';

export interface TeaserProps {
  blok: TeaserComponent;
}

const Teaser: FunctionComponent<TeaserProps> = ({ blok }) => {
  return <h2>{blok.headline}</h2>;
};

export default Teaser;
