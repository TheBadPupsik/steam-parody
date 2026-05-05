import { Link } from 'react-router-dom';
import './MenuProfile.css';

function MenuProfile() {
  return (
    <div className="MenuProfile">
      <Link to='/profile' className='ProfileTag'>Gaymer Master</Link>
      <span className='ProfileTag'>Пошук користувачів</span>
      <span className='ProfileTag'>Мої друзі</span>
      <span className='ProfileTag'>Мої значки</span>
      <span className='ProfileTag'>Мої скріншоти</span>
      <span className='ProfileTag'>Моє бажане</span>
      <span className='ProfileTag'>Мої обговорення</span>
      <span className='ProfileTag'>Мої скріншоти</span>
      <span className='ProfileTag'>Мої відео</span>
      <span className='ProfileTag'>Мої гайди</span>
      <span className='ProfileTag'>Мої рецензії</span>
      <span className='ProfileTag'>Вийти з акаунту</span>
    </div>
  );
}


export default MenuProfile;
