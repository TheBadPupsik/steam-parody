import './DlcCard.css';

export function DlcCard({ image, title, rating, description, price }) {
  return (
    <div className='just_card_pages'>
      <img src={image} alt="dlc" />

      <div className='describe_dlc_title'>
        <div className='describe_dlc_title1'>
          <div className='title_dlc_pa'>
            <p id='title_dlc_p'>{title}</p>

            <div>
              <p>{rating}</p>
              <img src='/pictures/star.png' alt="star" />
            </div>
          </div>

          <p id='text_cards_dlc'>
            {description}
          </p>
        </div>

        <div className='describe_dlc_title2'>
          <p id='text_dlc_button'>{price}</p>
          <button>У кошик</button>
        </div>
      </div>
    </div>
  );
}