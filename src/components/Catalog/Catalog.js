import Menu from '../Menu/Menu';
import { VerticalCardsSquare } from '../VerticalCardsBlock/VerticalCardsBlock';
import './Catalog.css';

function Catalog() {
  return (
    <div className='blockForComponents'>
      <Menu/>
      <VerticalCardsSquare/>
    </div>
  );

}

export default Catalog;
