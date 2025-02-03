import { Routes, Route } from 'react-router';

import MainLayout from './layout/MainLayout';
import HomePages from './pages/HomePages';
import ProductPages from './pages/ProductPages';
import ContactPages from './pages/ContactPages';
import NotFoundPages from './pages/NotFoundPages';
import CatalogPages from './pages/CatalogPages';
import ListIItem from './components/ListIItem';
import { useAppSelector } from './redux/store';

import CardСategory from './components/CardСategory';
import CardProduct from './components/CardProduct';

function App() {
  const categories = useAppSelector((state) => state.categories);
  const products = useAppSelector((state) => state.products);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePages />} />
        <Route path="сatalog" element={<CatalogPages />}>
          <Route index element={<ListIItem сomponent={CardСategory} data={categories} />} />
          <Route path=":category" element={<ListIItem сomponent={CardProduct} data={products} />} />
          <Route path=":category/:productID" element={<ProductPages />} />
        </Route>
        <Route path="product" element={<h2>Product</h2>} />
        <Route path="contact" element={<ContactPages />} />
        <Route path="*" element={<NotFoundPages />} />
      </Route>
    </Routes>
  );
}

export default App;
