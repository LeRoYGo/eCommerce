import { NavLink } from 'react-router';
import { useAppSelector } from '../../redux/store';

import style from './Categories.module.css';

function Categories() {
  const categories = useAppSelector((state) => state.categories);

  return (
    <ul className={style.list}>
      {categories.map((item) => (
        <li key={item.id} className={style.list_item}>
          <NavLink to={item.category} className={({ isActive }) => (isActive ? style.active : '')}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
