import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Mainpage from './components/Mainpage/Mainpage';
import Catalog from './components/Catalog/Catalog';
import Settings from './components/Settings/Settings';
import WishlistPage from './components/WishlistPage/WishlistPage';
import CartPage from './components/CartPage/CartPage';
import LibraryPage from './components/LibraryPage/LibraryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Mainpage />} />
          <Route path="library" element={<LibraryPage/>} />
          <Route path="catalog" element={<Catalog/>} />
          <Route path="settings" element={<Settings/>} /> 
          <Route path="wishlist" element={<WishlistPage/>} />
          <Route path="cart" element={<CartPage/>} />
          <Route path="cart" element={<CartPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
