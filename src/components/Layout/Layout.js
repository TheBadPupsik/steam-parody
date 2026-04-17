import { Link, Outlet } from 'react-router-dom'; import './Layout.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Search from '../Search/Search';

function Layout() {
  return (
    <div className="layout-wrapper">
      <Header></Header>
      <Search></Search>

      <main className="main-content">
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
  );
}



export default Layout;
