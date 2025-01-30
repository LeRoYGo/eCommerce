import { NavLink, useParams } from 'react-router';
import style from './Categories.module.css';

const filters = [
  { id: 1, category: '', name: 'All' },
  { id: 2, category: 'chairs_benches', name: 'Chairs & Benches' },
  { id: 3, category: 'tables', name: 'Tables' },
  { id: 4, category: 'sofas', name: 'Sofas' },
  { id: 5, category: 'beds', name: 'Beds' },
  { id: 6, category: 'novelties', name: 'Novelties' },
];

function Categories() {
  const { category } = useParams();
  console.log(category);

  return (
    <ul className={style.list}>
      {filters.map((item) => (
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
