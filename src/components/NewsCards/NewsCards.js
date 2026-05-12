import './NewsCards.css';

export function NewsCards({
  avatar,
  name,
  date,
  image,
  title,
  text
}) {
  return (
    <div className='first_cards_news'>

      <img src={image} alt="news" />

      <div className='f_big_desc2'>

        <div className='first_desc' id='just_fix_me'>
          <div className='ava_plus_nickname'>
            <div>
              <img src={avatar} alt="ava" />
              <p>{name}</p>
            </div>
            <p>{date}</p>
          </div>

          <img src='/pictures/etc_.png' alt="etc" className='etc_comm' />
        </div>

        <div className='second_desc'>
          <p id='fir'>{title}</p>
          <p id='sec'>{text}</p>
        </div>

        <div className='third_desc'>
          <div className='third_desc_b1'>
            <img src='/pictures/h1.png' alt="heart" />2.5k
          </div>

          <div className='third_desc_b2'>
            <img src='/pictures/c1.png' alt="comment" />2.5k
          </div>

          <div className='third_desc_b2'>
            <img src='/pictures/share.png' alt="share" />Поділитись
          </div>
        </div>

      </div>
    </div>
  );
}