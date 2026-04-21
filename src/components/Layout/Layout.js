import { Link, Outlet, useLocation  } from 'react-router-dom'; import './Layout.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Search from '../Search/Search';

function Layout() {
  const location = useLocation();
  const hideSearchAndFooter = ['/settings',];
  const isHidden = hideSearchAndFooter.includes(location.pathname);

  return (
    <div className="layout-wrapper">
      <Header/>
      {!isHidden && <Search/>}

      <main className="main-content">
        <Outlet />
      </main>

      {!isHidden && <Footer/>}
    </div>
  );
}



export default Layout;
