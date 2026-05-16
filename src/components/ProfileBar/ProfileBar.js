import './ProfileBar.css';
import { NavLink } from 'react-router-dom';
function ProfileBar() {
  return (
    <div className="ProfileBar">
      <div className='CategoryProfile'>
        <div className='ProfileLVL'>
          <h2>Рівень</h2>
          <img src='././images/Level Badges.svg' />
        </div>
        <NavLink to='/profile' className='ProfileBarBTN'>Головна<span>100</span> </NavLink>
        <NavLink to='/profile/badges' className='ProfileBarBTN'>Значки<span>100</span> </NavLink>
        <NavLink to='/profile/games' className='ProfileBarBTN'>Ігри<span>100</span> </NavLink>
        <NavLink to='/profile/wishlist' className='ProfileBarBTN'>Бажане<span>100</span> </NavLink>
        <NavLink to='/profile/discussion' className='ProfileBarBTN'>Обговорення<span>100</span> </NavLink>
        <NavLink to='/profile/screenshot' className='ProfileBarBTN'>Скріншоти<span>100</span> </NavLink>
        <NavLink to='/profile/videos' className='ProfileBarBTN'>Відео<span>100</span> </NavLink>
        <NavLink to='/profile/guide' className='ProfileBarBTN'>Гайди<span>100</span> </NavLink>
        <NavLink to='/profile/review' className='ProfileBarBTN'>Рецензії<span>100</span> </NavLink>
      </div>

      <div className='ProfileFriendsList'>
        <div className='FriendList'>
          <NavLink to='/profile/' className='ProfileBarBTN'>Друзі<span>25</span> </NavLink>
        </div>

        <div className='FriendsList'>
          <span className='Friend'> <span><img src='././images/ProfileFriendPicture.png' alt='ProfileAva' /> <h2>GhostRogue</h2></span><img src='././images/Level Badges.svg' /></span>
          <span className='Friend'> <span><img src='././images/ProfileFriendPicture.png' alt='ProfileAva' /> <h2>s1imerock</h2></span><img src='././images/Level Badges.svg' /></span>
          <span className='Friend'> <span><img src='././images/ProfileFriendPicture.png' alt='ProfileAva' /> <h2>NikaNii</h2></span><img src='././images/Level Badges.svg' /></span>
          <span className='Friend'> <span><img src='././images/ProfileFriendPicture.png' alt='ProfileAva' /> <h2>whysxugly</h2></span><img src='././images/Level Badges.svg' /></span>
          <span className='Friend'> <span><img src='././images/ProfileFriendPicture.png' alt='ProfileAva' /> <h2>zuzeyka</h2></span><img src='././images/Level Badges.svg' /></span>

        </div>
      </div>

    </div>
  );
}

export default ProfileBar;
