import { NavLink } from 'react-router';
import { NavigationProps } from './Navigation.props';

function Navigation({ styles, active }: NavigationProps) {
  const isActive = ({ isActive }: { isActive: boolean }) => (isActive ? active : '');

  return (
    <nav className={styles}>
      <ul>
        <li>
          <NavLink to="/" className={isActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={isActive}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className={isActive}>
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={isActive}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
