import { ViewBLock } from '../CatalogUperBlock/CatalogUperBlock';
import Menu from '../Menu/Menu';
import { VerticalCardsSquare } from '../VerticalCardsBlock/VerticalCardsBlock';
import './Catalog.css';
import { useState } from 'react';

function Catalog() {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className='catalog-container'>
      <ViewBLock viewMode={viewMode} setViewMode={setViewMode} />
      <div className='blockForComponents'>
        <Menu />
        <VerticalCardsSquare />
      </div>
    </div>
  );

}

export default Catalog;
