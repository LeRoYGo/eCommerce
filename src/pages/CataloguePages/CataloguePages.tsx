import style from './CataloguePages.module.css';
import CardProduct from '../../components/CardProduct';
import Categories from '../../components/Categories';

const cardProducts = [
  {
    id: 1,
    img: `https://i.ibb.co/VWJ7Ngkn/Default.png`,
    countStars: 5,
    title: '1.3 Chair',
    price: 69.9,
  },
  {
    id: 2,
    img: `https://i.ibb.co/5XmdN808/Default-1.png`,
    countStars: 3,
    title: 'Kuyu Desk',
    price: 6.9,
  },
  {
    id: 3,
    img: `https://i.ibb.co/FLsPKdGy/Default-2.png`,
    countStars: 4,
    title: 'Neat Noon',
    price: 9.9,
  },
  {
    id: 4,
    img: `https://i.ibb.co/DDD7CxnK/Default-3.png`,
    countStars: 1,
    title: 'Morph',
    price: 169.9,
  },
];

function CataloguePages() {
  return (
    <div className={style.catalog}>
      <div className={style.banner}>
        <img src="https://i.ibb.co/N6LTNMMK/Block.png" alt="banner" />
      </div>
      <nav className={style.filter}>
        <Categories />
      </nav>
      <div className={style.list}>
        {cardProducts.map((item) => (
          <CardProduct key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CataloguePages;
