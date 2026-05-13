import './ProfileBar.css';
import { NavLink } from 'react-router-dom';
function ProfileBar() {
  return (
    <div className="ProfileBar">
      <div className='CategoryProfile'>
        <span className='ProfileBarBTN'>Головна</span>
        <span>Значки</span>
        <span>Ігри</span>
        <span>Бажане</span>
        <span>Обговорення</span>
        <span>Скрішоти</span>
        <span>Відео</span>
        <span>Гайди</span>
        <span>Рецензії</span>
      </div>

    </div>
  );
}

export default ProfileBar;
