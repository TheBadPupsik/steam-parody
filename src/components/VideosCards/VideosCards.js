import './VideosCards.css';

export function VideosCards({ avatar, name, date, image, text }) {
  return (
    <div className='card_main_video'>

      <div className='first_desc'>
        <div className='ava_plus_nickname'>
          <div>
            <img src={avatar} alt="ava" />
            <p>{name}</p>
          </div>
          <p>{date}</p>
        </div>

        <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
      </div>

      <img src={image} alt="video" />

      <p id='thi'>{text}</p>

      <div className='third_desc'>
        <div className='third_desc_b1'>
          <img src='/pictures/h1.png' alt="heart"/>2.5k
        </div>

        <div className='third_desc_b2'>
          <img src='/pictures/c1.png' alt="comment"/>2.5k
        </div>

        <div className='third_desc_b2'>
          <img src='/pictures/share.png' alt="share"/>Поділитись
        </div>
      </div>

    </div>
  );
}