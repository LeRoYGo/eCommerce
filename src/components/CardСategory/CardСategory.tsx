import style from './CardСategory.module.css';
import { Link } from 'react-router';
import { categoriesState as CategoriesProps } from '../../redux/slice/categoriesState';

function CardСategory({ img, name, path }: CategoriesProps) {
  return (
    <Link to={path} className={style.card}>
      <img className={style.img} src={img} alt={name} />
      <strong className={style.name}>{name}</strong>
    </Link>
  );
}

export default CardСategory;
