import DynamicComponent from '../dynamic-component';
import { FunctionComponent } from 'react';
import { PageComponent } from '../../models/sb-page.model';

interface PageProps {
  blok: PageComponent;
}

const Page: FunctionComponent<PageProps> = ({ blok }) => {
  return (
    <main className="container flex justify-center">
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  );
};

export default Page;
