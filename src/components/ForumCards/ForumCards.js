import './ForumCards.css';

export function ForumCards({
  avatar,
  name,
  date,
  title,
  text,
  image,
  type = "withImage"
}) {

  return (
    <div className={type === "textOnly" ? "five_big_card" : "first_card_forum"}>

      <div className='first_desc'>
        <div className='ava_plus_nickname'>
          <div>
            <img src={avatar} alt="ava" />
            <p>{name}</p>
          </div>
          <p>{date}</p>
        </div>

        <img src='/pictures/etc_.png' alt="etc" className='etc_comm' />
      </div>

      <p id={type === "textOnly" ? "text_fiveplus_c" : "text_seven_c"}>
        {title}
      </p>

      <p id={type === "textOnly" ? "text_fiveplus_text_c" : "text_sevenplus_c"}>
        {text}
      </p>

      {type === "withImage" && image && (
        <img src={image} alt="post" />
      )}

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
  );
}