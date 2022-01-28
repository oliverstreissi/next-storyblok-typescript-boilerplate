import { FunctionComponent } from 'react';
import { FeatureComponent } from 'src/models/sb-feature.model';

export interface FeatureProps {
  blok: FeatureComponent;
}

const Feature: FunctionComponent<FeatureProps> = ({ blok }) => {
  return <div>{blok.name}</div>;
};

export default Feature;
