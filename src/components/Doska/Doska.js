import { useNavigate } from 'react-router-dom';
import './Doska.css';
import { NavLink } from 'react-router-dom';

export function Doska() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='block'>
        <input className='block_input' type='text' placeholder='Пошук налаштувань...' />
        <div className='block_settings'>

          <div className='tema'>
            <div className='tema_nazvanie'>
              <img src='/pictures/Icons.png' alt='' />
              <p>Темна Тема</p>
            </div>
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider"></span>
          </label>          </div>

          <NavLink to='/general' className='settings'>
            <img src='/pictures/Icons (1).png' className='icon_settings' alt='' />
            <p>Загальні налаштування</p>
          </NavLink>

          <NavLink to='/password' className='settings'>
            <img src='/pictures/Icons (2).png' className='icon_settings' alt='' />
            <p>Пароль</p>
          </NavLink>

          <NavLink to='/notifications' className='settings'>
            <img src='/pictures/Icons (3).png' className='icon_settings' alt='' />
            <p>Сповіщення</p>
          </NavLink>

          <NavLink to='/wallet' className='settings'>
            <img src='/pictures/Icons (4).png' className='icon_settings' alt='' />
            <p>Гаманець</p>
          </NavLink>

          <NavLink to='/deleteAccount' className='settings'> 
           <img src='/pictures/Icons (5).png' className='icon_settings' alt='' />
            <p>Видалення акаунта</p>
          </NavLink>

        </div>
      </div>
    </div>
  );
}

export default Doska;



