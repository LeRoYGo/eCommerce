import style from './ListIItem.module.css';
import { useAppSelector } from '../../redux/store';
import CardСategory from '../CardСategory';

function ListIItem() {
  const categories = useAppSelector((state) => state.categories);
  return (
    <div className={style.list}>
      {categories.map((item) => (
        <CardСategory key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ListIItem;
