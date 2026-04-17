import { Link, NavLink } from 'react-router-dom';
import './Search.css';

function Search() {
  return (
    <div className='SearchPanel'>

      <div className="Panel">
        <input type="text" placeholder="Пошук у Крамниці..." className="SearchInput" />
        <img src='Icons.svg' alt='Icon' className="SearchIcon" />
      </div>

      <div className="Selector">
        <NavLink to="/catalog" className="SelectorLink">Каталог</NavLink>
        <NavLink to="/news" className="SelectorLink">Новини</NavLink>
      </div>

      <div className="IconsContainer">
        <Link to="/wishlist" className='IconObj'>
          <img src='Wishlist.svg' alt='Wishlist' />
        </Link>
        <Link to="/cart" className='IconObj'>
          <img src='Cart.svg' alt='Cart' />
        </Link>
      </div>

    </div>
  );
}

export default Search;