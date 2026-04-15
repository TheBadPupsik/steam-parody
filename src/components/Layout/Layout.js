import Mainpage from '../Mainpage/Mainpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MainPage" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}



export default Layout;
