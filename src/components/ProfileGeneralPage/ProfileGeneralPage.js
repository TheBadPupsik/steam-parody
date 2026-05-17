import './ProfileGeneralPage.css';

function ProfileGeneralPage() {
  return (
    <div className="ProfileGeneralPage">

      <div className='GalleryBadges'>
        <div className='GalleryName'>
          <h2>Галерея значків</h2>
        </div>
        <div className='Gallery'>
          <span className='InfoMore'>
            <h1>5</h1>
            <h5>Значків</h5>
          </span>
          <span className='BadgesShow'>
            <img src='././images/Badges.png' alt='Badge' />
            <img src='././images/Badges-1.png' alt='Badge' />
            <img src='././images/Badges-2.png' alt='Badge' />
            <img src='././images/Badges-3.png' alt='Badge' />
          </span>
        </div>
      </div>

      <div className='GameCollection'>
        <div className='GalleryName'>
          <h2>Колекція ігор</h2>
        </div>
        <div className='GameCollectionInfo'>
          <span className='InfoMore'>
            <h1>1234</h1>
            <h5>Ігор</h5>
          </span>
          <span className='InfoMore'>
            <h1>121</h1>
            <h5>DLC</h5>
          </span>
          <span className='InfoMore'>
            <h1>245</h1>
            <h5>Бажаних</h5>
          </span>
        </div>

        <div className='GamesShow'>
          <img className='Game1' src='././images/game1.jpg' alt='game' />
          <img className='Game1' src='././images/game1.jpg' alt='game' />
          <img className='Game1' src='././images/game1.jpg' alt='game' />
          <img className='Game1' src='././images/game1.jpg' alt='game' />
        </div>
      </div>

      <div className='DiscussionGallery'>
        <div className='GalleryName'>
          <h2>Галерея обговорень</h2>
        </div>

        <div className='Discussion'>
          <div className='userInfo'>
            <span className='accountInfo'><img src='././images/profile-avatar.jpg' alt='icon' /> <p>Fallout 4</p></span>
            <p className='date'>17.05.2026</p>
          </div>
        </div>

      </div>
    </div>
  );
}


export default ProfileGeneralPage;
