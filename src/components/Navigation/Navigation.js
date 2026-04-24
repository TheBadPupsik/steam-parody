import './Navigation.css';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className='My_Navigation'>
      <NavLink to="/about_game">Про гру</NavLink>
      <NavLink to="/characteristics">Характеристики</NavLink>
      <NavLink to="/community">Спільнота</NavLink>
    </nav>
  );
}

export default Navigation;