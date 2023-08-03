import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

interface SbTeaser extends SbBlokData {
  headline: string;
}

const Teaser = ({ blok }: { blok: SbTeaser }) => {
  return (
    <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
