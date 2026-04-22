import { ViewBLock } from '../CatalogUperBlock/CatalogUperBlock';
import { ChangeBlock } from '../ChangeBlock/ChangeBlock';
import Menu from '../Menu/Menu';
import './Catalog.css';
import { useState } from 'react';

function Catalog() {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className='catalog-container'>
      <ViewBLock viewMode={viewMode} setViewMode={setViewMode} />
      <div className='blockForComponents'>
        <Menu />
        <ChangeBlock viewMode={viewMode}/>
      </div>
    </div>
  );

}

export default Catalog;
