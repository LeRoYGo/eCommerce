import style from './CardСategory.module.css';
import { Link } from 'react-router';
import { categoriesState as CategoriesProps } from '../../redux/slice/categoriesState';

function CardСategory(data: CategoriesProps) {
  const { img, title, categoryName } = data;
  return (
    <Link to={categoryName} className={style.card}>
      <img className={style.img} src={img} alt={title} />
      <strong className={style.name}>{title}</strong>
    </Link>
  );
}

export default CardСategory;
