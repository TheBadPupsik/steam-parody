import './Search.css';

function Search() {
  return (
    <div className='SearchPanel'>
      <div className="Search">
        <div className="Panel">
          <h3>Пошук у Крамниці...</h3>
          <img src='Icons.svg' alt='Icon' />
        </div>
        <div className="Selector">
          <h3>Каталог</h3>
          <h3>Новини</h3>
        </div>
      </div>
      <div className="Icons">
        <img src='Wishlist.svg' alt='Wishlist' />
        <img src='Cart.svg' alt='Cart' />
      </div>
    </div>
  );
}

export default Search;