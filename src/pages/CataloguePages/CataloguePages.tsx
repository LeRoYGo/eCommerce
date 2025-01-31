import style from './CataloguePages.module.css';
import CardProduct from '../../components/CardProduct';
import Categories from '../../components/Categories';
import { useAppSelector } from '../../redux/store';

function CataloguePages() {
  const products = useAppSelector((state) => state.products);
  return (
    <div className={style.catalog}>
      <div className={style.banner}>
        <img src="https://i.ibb.co/N6LTNMMK/Block.png" alt="banner" />
      </div>
      <nav className={style.filter}>
        <Categories />
      </nav>
      <div className={style.list}>
        {products.map((item) => (
          <CardProduct key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CataloguePages;
