import style from './CatalogPages.module.css';
import Categories from '../../components/Categories';
import { Outlet } from 'react-router';

function CatalogPages() {
  return (
    <div className={style.catalog}>
      <div className={style.banner}>
        <img
          src="https://img.freepik.com/premium-photo/young-woman-with-arms-raised-against-yellow-background_1048944-4158263.jpg?semt=ais_hybrid"
          alt="banner"
        />
      </div>
      <Categories />
      <Outlet />
    </div>
  );
}

export default CatalogPages;
