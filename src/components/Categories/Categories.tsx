import style from './Categories.module.css';

const filters = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Chairs & Benches',
  },
  {
    id: 3,
    name: 'Tables',
  },
  {
    id: 4,
    name: 'Sofas',
  },
  {
    id: 5,
    name: 'Beds',
  },
  {
    id: 6,
    name: 'Novelties',
  },
];

function Categories() {
  return (
    <ul className={style.list}>
      {filters.map((item) => (
        <li key={item.id} className={style.list_item}>
          <a href="#" className={style.active}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
