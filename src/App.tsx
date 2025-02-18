import { Routes, Route } from 'react-router';

import { useAppSelector } from './redux/store';
import MainLayout from './layout/MainLayout';
import CatalogLayout from './layout/CatalogLayout';
import HomePages from './pages/HomePages';
import ProductPages from './pages/ProductPages';
import ContactPages from './pages/ContactPages';
import NotFoundPages from './pages/NotFoundPages';

import CatalogList from './pages/CatalogList';
import CardСategory from './components/CardСategory';
import CardProduct from './components/CardProduct';

function App() {
  const categories = useAppSelector((state) => state.categories);
  const products = useAppSelector((state) => state.products);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePages />} />
        <Route path="сatalog" element={<CatalogLayout />}>
          <Route index element={<CatalogList сomponent={CardСategory} data={categories} />} />
          <Route
            path=":category"
            element={<CatalogList сomponent={CardProduct} data={products} />}
          />
        </Route>
        <Route path="сatalog/:category/:productID" element={<ProductPages />} />
        <Route path="product" element={<h2>Product</h2>} />
        <Route path="contact" element={<ContactPages />} />
        <Route path="*" element={<NotFoundPages />} />
      </Route>
    </Routes>
  );
}

export default App;
