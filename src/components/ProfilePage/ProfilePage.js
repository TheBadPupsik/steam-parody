import ProfileBar from '../ProfileBar/ProfileBar';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <div className='ProfilePage'>

      <div className='BannerWrapper'>
        <img className='Banner' src='././images/BannerImg.png' alt='BannerIMG' />
        <img className='IconProfile' src='./images/profile-avatar.jpg' alt='avatar' />

              <div className='ProfileData'>
        <h2 className='Nickname'>Gaymer Master</h2>
        <p className='StatusOnline'>Онлайн</p>

        <span className='ProfileBTN'>
          <img src='././images/pencil.svg' alt='pencil' />
          <p>Редагувати профіль</p>
        </span>
      </div>
      </div>



      <ProfileBar />

    </div>
  );
}

export default ProfilePage;
