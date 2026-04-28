import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Mainpage from './components/Mainpage/Mainpage';
import Catalog from './components/Catalog/Catalog';
import Settings from './components/Settings/Settings';
import WishlistPage from './components/WishlistPage/WishlistPage';
import LibraryPage from './components/LibraryPage/LibraryPage';
import { Navigation } from './components/Navigation/Navigation';
import { About_Game } from './components/About_Game/About_Game';
import { Characteristics } from './components/Characteristics/Characteristics'
import { Community } from './components/Community/Community'
import { CartPageRender } from './components/CartPage/CartPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="settings" element={<Settings />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="commmunity" element={<Community />} />
          <Route path="cart" element={<CartPageRender>  </CartPageRender>} />

          <Route path="/about_game" element={<><Navigation /><About_Game /></>} />
          <Route path="/characteristics" element={<><Navigation /><Characteristics /></>} />
          <Route path="/community" element={<><Navigation /><Community /></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
