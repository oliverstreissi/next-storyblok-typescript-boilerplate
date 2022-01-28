import { FunctionComponent } from 'react';
import DynamicComponent from '@components/dynamic-component';
import { GridComponent } from 'src/models/sb-grid.model';

export interface GridProps {
  blok: GridComponent;
}

const Grid: FunctionComponent<GridProps> = ({ blok }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-wrap max-w-3xl mt-12">
      {blok.columns.map((blok) => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Grid;
