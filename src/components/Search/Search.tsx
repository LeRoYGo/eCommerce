import style from './Search.module.css';
import search from '../../assets/search.svg';

function Search() {
  return (
    <label htmlFor={style.label}>
      <img className={style.img} src={search} alt="search" />
    </label>
  );
}

export default Search;
