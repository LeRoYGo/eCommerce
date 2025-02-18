import { NavLink } from 'react-router';
import { useAppSelector } from '../../redux/store';

import style from './Categories.module.css';

function Categories() {
  const categories = useAppSelector((state) => state.categories);

  return (
    <nav className={style.filter}>
      <ul className={style.list}>
        {categories.map((item) => (
          <li key={item.id} className={style.list_item}>
            <NavLink
              to={item.categoryName}
              className={({ isActive }) => (isActive ? style.active : '')}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
