import { Link, Outlet, useLocation } from 'react-router-dom'; import './Layout.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Search from '../Search/Search';

function Layout() {
  const location = useLocation();
  const hideSearch = ['/settings', '/library'];
  const footerSearch = ['/settings'];
  const isSearchHidden = hideSearch.includes(location.pathname);
  const isFooterHidden = footerSearch.includes(location.pathname);

  return (
    <div className="layout-wrapper">
      <Header />
      {!isSearchHidden && <Search />}

      <main className="main-content">
        <Outlet />
      </main>

      {!isFooterHidden && <Footer />}
    </div>
  );
}



export default Layout;
