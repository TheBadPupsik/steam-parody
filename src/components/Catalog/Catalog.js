import { ViewBLock } from '../CatalogUperBlock/CatalogUperBlock';
import Menu from '../Menu/Menu';
import { VerticalCardsSquare } from '../VerticalCardsBlock/VerticalCardsBlock';
import './Catalog.css';

function Catalog() {
  return (
    <div className='catalog-container'>
      <ViewBLock />
      <div className='blockForComponents'>
        <Menu />
        <VerticalCardsSquare />
      </div>
    </div>
  );

}

export default Catalog;
