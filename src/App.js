import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Mainpage from './components/Mainpage/Mainpage';
import Catalog from './components/Catalog/Catalog';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Mainpage />} />
          <Route path="catalog" element={<Catalog/>} />
          <Route path="settings" element={<Settings/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
