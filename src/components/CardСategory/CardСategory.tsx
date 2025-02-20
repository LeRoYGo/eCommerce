import style from './CardСategory.module.css';
import { Link } from 'react-router';
import { categoriesState as CategoriesProps } from '../../redux/slice/categoriesState';

function CardСategory(data: CategoriesProps) {
  return (
    <Link to={data.categoryName} className={style.card}>
      <img className={style.img} src={data.img} alt={data.title} />
      <strong className={style.name}>{data.title}</strong>
    </Link>
  );
}

export default CardСategory;
