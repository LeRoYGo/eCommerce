import style from './Catalog.module.css';
import CardProduct from '../CardProduct';

function Catalog() {
  return (
    <div className={style.catalog}>
      <CardProduct />
    </div>
  );
}

export default Catalog;
