import { CardsWishlistsRender } from '../CardsWishlists/CardsWishlists';
import Menu from '../Menu/Menu';
import './WishlistPage.css';

function WishlistPage() {
  return (
    <div className='wishlist-container'>
    <Menu/>
    <CardsWishlistsRender/>
    </div>
  );
}

export default WishlistPage;
