import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Mainpage from './components/Mainpage/Mainpage';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Mainpage />} />
          <Route path="catalog" element={<Catalog/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
