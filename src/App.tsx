import { Routes, Route } from 'react-router';

import MainLayout from './layout/MainLayout';
import HomePages from './pages/HomePages';
import ProductPages from './pages/ProductPages';
import ContactPages from './pages/ContactPages';
import NotFoundPages from './pages/NotFoundPages';
import CataloguePages from './pages/CataloguePages';
import ListIItem from './components/ListIItem';
import { useAppSelector } from './redux/store';

function App() {
  const categories = useAppSelector((state) => state.categories);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePages />} />
        <Route path="shop" element={<CataloguePages />}>
          <Route index element={<ListIItem />} />
          {categories.map((obj) => (
            <Route path={obj.path} element={<ListIItem />}>
              {
              <Route path={obj.path} element={<ListIItem />} />
              }
            </Route>
          ))}
        </Route>
        <Route path="product" element={<ProductPages />} />
        <Route path="contact" element={<ContactPages />} />
        <Route path="*" element={<NotFoundPages />} />
      </Route>
    </Routes>
  );
}

export default App;
