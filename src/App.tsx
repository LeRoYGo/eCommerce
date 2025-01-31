import { Routes, Route } from 'react-router';

import MainLayout from './layout/MainLayout';
import HomePages from './pages/HomePages';
import CataloguePages from './pages/CataloguePages';
import ProductPages from './pages/ProductPages';
import ContactPages from './pages/ContactPages';
import NotFoundPages from './pages/NotFoundPages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePages />} />
        <Route path="shop" element={<CataloguePages />} />
        <Route path="product" element={<ProductPages />} />
        <Route path="contact" element={<ContactPages />} />
        <Route path="*" element={<NotFoundPages />} />
      </Route>
    </Routes>
  );
}

export default App;
