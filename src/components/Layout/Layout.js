import Mainpage from '../Mainpage/Mainpage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/catalog" element={<Catalog />} /> */}
      </Routes>
    </BrowserRouter>
  );
}



export default Layout;
