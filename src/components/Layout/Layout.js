import { Link, Outlet } from 'react-router-dom'; import './Layout.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Search from '../Search/Search';

function Layout() {
  return (
    <div>
      <Header></Header>
      <Search></Search>

      <main>
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
  );
}



export default Layout;
