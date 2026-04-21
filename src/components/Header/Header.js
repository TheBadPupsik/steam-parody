import './Header.css';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <div className='Header'>
      <div className='Head'>

        <NavLink to='/'><img src="./pictures/logo.png" alt="logo" className='Logo'></img></NavLink>

        <div className='Tabs'>
            <NavLink to='/' className='Text'>Крамниця</NavLink>
          <p className='Text'>Бібліотека</p>
          <p className='Text'>Чат</p>
        </div>

        <button className='Secondary_button'><p>Увійти</p></button>

      </div>
    </div>
  );
}

export default Header;

