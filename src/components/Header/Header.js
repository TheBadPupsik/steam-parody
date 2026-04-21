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

        <div className='Icons'>

        <NavLink to='/settings' className='Icon'>
        <img src="./images/settings-fill.svg" alt="icon" />
        </NavLink>

          <span className='Icon'><img src="./images/Bell.svg" alt="icon" /></span>
          <img className='ProfileCircle' src='./images/profile-avatar.jpg' alt='avatar'></img>

        </div>

        {/* <button className='Secondary_button'><p>Увійти</p></button> */}

      </div>
    </div>
  );
}

export default Header;

