import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

interface SbFeature extends SbBlokData {
  name: string;
}

const Feature = ({ blok }: { blok: SbFeature }) => (
  <div {...storyblokEditable(blok)}>{blok.name}</div>
);

export default Feature;
