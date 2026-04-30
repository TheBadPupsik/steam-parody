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
import { Forum } from './components/Forum/Forum'
import { ScreenShotes } from './components/ScreenShotes/ScreenShotes'
import { Videos } from './components/Videos/Videos'
import { Guides } from './components/Guides/Guides'
import { News } from './components/News/News'

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
          <Route path="/forum" element={<><Navigation /><Forum /></>} />
          <Route path="/screenshotes" element={<><Navigation /><ScreenShotes /></>} />
          <Route path="/videos" element={<><Navigation /><Videos /></>} />
          <Route path="/guides" element={<><Navigation /><Guides /></>} />
          <Route path="/news" element={<><Navigation /><News /></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
