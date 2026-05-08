import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import MenuProfile from '../MenuProfile/MenuProfile';
import Doska from '../Doska/Doska'

export function Header() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='Header'>
      <div className='Head'>

        <NavLink to='/'><img src="./pictures/logo.png" alt="logo" className='Logo'></img></NavLink>

        <div className='Tabs'>
          <NavLink to='/' className='Text'>Крамниця</NavLink>
          <NavLink to='/library' className='Text'>Бібліотека</NavLink>
          <NavLink to='/chat' className='Text'>Чат</NavLink>
        </div>

        <div className='Icons'>

          <NavLink to='/settings' className='Icon'>
            <img src="./images/settings-fill.svg" alt="icon" />
          </NavLink>

          <span className='Icon'><img src="./images/Bell.svg" alt="icon" /></span>

          <span onClick={() => setShowMenu(!showMenu)}
          
            style={{ position: 'relative' }}
          >
            <img className='ProfileCircle' src='./images/profile-avatar.jpg' alt='avatar'></img>
            {showMenu && <MenuProfile />}

          </span>

        </div>


        {/* <button className='Secondary_button'><p>Увійти</p></button> */}

      </div>
    </div>
  );
}

export default Header;

