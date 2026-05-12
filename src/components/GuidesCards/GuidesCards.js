import './GuidesCards.css';

export function GuidesCards({ avatar, name, date, image, title, text }) {
  return (
    <div className='t_big_card'>

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

      <div className='fourth_desc'>
        <img src={image} alt="guide" className='picture_com_help'/>

        <div className='picture_com_text'>
          <p id='text_four_c'>{title}</p>
          <p id='text_five_c'>{text}</p>
        </div>
      </div>

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