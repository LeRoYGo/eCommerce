import style from './CataloguePages.module.css';
import Categories from '../../components/Categories';
import { Outlet } from 'react-router';

function CataloguePages() {
  return (
    <div className={style.catalog}>
      <div className={style.banner}>
        <img src="https://i.ibb.co/N6LTNMMK/Block.png" alt="banner" />
      </div>
      <Categories />
      <Outlet />
    </div>
  );
}

export default CataloguePages;
