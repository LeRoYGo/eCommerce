import style from './ListIItem.module.css';
import { CardProductProps } from '../CardProduct/CardProduct.props';

type ListIItemProps = {
  сomponent: any;
  data: any[] | CardProductProps[];
};

function ListIItem({ сomponent, data }: ListIItemProps) {
  const Component = сomponent;
  return (
    <ul className={style.list}>
      {data.map((item) => (
        <li key={item.id} className={style.item}>
          <Component key={item.id} {...item} />
        </li>
      ))}
    </ul>
  );
}

export default ListIItem;
