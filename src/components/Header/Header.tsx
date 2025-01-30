import style from './Header.module.css';
import shopping_basket from '../../assets/shopping_basket.svg';
import user_circle from '../../assets/user_circle.svg';
import search from '../../assets/search.svg';

import { NavLink } from 'react-router';

function Header() {
  const isActive = ({ isActive }: { isActive: boolean }) => (isActive ? style.active : '');

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <NavLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" fill="none">
            <path
              className={style.svg}
              fill="#E0E6EB"
              d="M2.371 30.4V3.49h6.555V30.4zM15.688 27.677q-2.97-2.988-2.971-7.973 0-4.983 2.97-7.955 2.972-2.97 7.687-2.97 3.91 0 6.632 1.935t3.603 5.54h-7.091q-.92-1.916-3.01-1.917-2.09 0-3.105 1.476-1.017 1.476-1.016 3.89 0 2.416 1.016 3.892 1.016 1.477 2.971 1.476 1.227 0 1.917-.422.69-.421 1.227-1.495h7.091q-.881 3.45-3.642 5.481-2.76 2.033-6.593 2.032-4.715 0-7.686-2.99M49.75 23.69q1.304-1.379 1.304-3.986 0-2.606-1.342-3.968-1.342-1.36-3.182-1.361-1.839.001-3.162 1.361t-1.323 3.968 1.36 3.987q1.362 1.38 3.202 1.38t3.143-1.38m-11.136 3.95q-3.24-3.03-3.239-7.974 0-4.946 3.22-7.917t7.974-2.97 7.954 2.97q3.2 2.972 3.2 7.917 0 4.944-3.18 7.973-3.184 3.029-7.936 3.028-4.755 0-7.993-3.028M68.112 9.01v3.143q2.031-3.372 6.478-3.373 3.68 0 5.962 2.453 2.28 2.454 2.28 6.67V30.4h-6.516V18.786q0-2.07-1.093-3.202-1.093-1.13-3.009-1.131-1.918 0-3.01 1.131t-1.092 3.201V30.4h-6.555V9.01zM88.005 30.4V9.01h6.555V30.4zm5.98-23.805q-1.113 1.111-2.722 1.111-1.61 0-2.722-1.111T87.43 3.853t1.11-2.74Q89.654.001 91.264.001t2.722 1.112q1.111 1.111 1.112 2.74 0 1.63-1.112 2.742M101.332 27.677q-2.97-2.988-2.97-7.973 0-4.983 2.97-7.955 2.971-2.97 7.687-2.97 3.91 0 6.632 1.935t3.603 5.54h-7.092q-.92-1.916-3.009-1.917-2.09 0-3.105 1.476t-1.016 3.89q0 2.416 1.016 3.892 1.015 1.477 2.971 1.476 1.226 0 1.916-.422.69-.421 1.227-1.495h7.092q-.882 3.45-3.642 5.481-2.76 2.033-6.593 2.032-4.716 0-7.687-2.99"
            />
          </svg>
        </NavLink>
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li className="navItem">
              <NavLink to="/" className={isActive}>
                Home
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/shop" className={isActive}>
                Shop
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/product" className={isActive}>
                Product
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/contact" className={isActive}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={style.blockBtn}>
          <a href="#">
            <img src={search} alt="" />
          </a>
          <a href="#">
            <img src={user_circle} alt="" />
          </a>
          <a href="#">
            <img src={shopping_basket} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
