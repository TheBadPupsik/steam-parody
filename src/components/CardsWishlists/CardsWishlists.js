import './CardsWishlists.css';

const cardsData = [
  { id: 1, image: './images/ARK.png', tags: ['шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ'], name: 'ARK: Survival Evolved', rate: 4.5, price: 1000, discount: '40%', originalPrice: 1000, discountEnd: '30.02.2023 10:00' },
  { id: 2, image: './images/Satisfactory.png', tags: ['шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ'], name: 'Satisfactory', rate: 4.5, price: 1000, discount: '40%', originalPrice: 1000, discountEnd: '30.02.2023 10:00' },
  { id: 3, image: './images/Enshrouded.png', tags: ['шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ'], name: 'Enshrouded', rate: 4.5, price: 1000, discount: '40%', originalPrice: 1000, discountEnd: '30.02.2023 10:00' },
  { id: 4, image: './images/7 Days to Die.png', tags: ['шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ'], name: '7 Days to Die', rate: 4.5, price: 1000, discount: '40%', originalPrice: 1000, discountEnd: '30.02.2023 10:00' },
  { id: 5, image: './images/Project Zomboid.png', tags: ['шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ'], name: 'Project Zomboid', rate: 4.5, price: 1000, discount: '40%', originalPrice: 1000, discountEnd: '30.02.2023 10:00' },
  { id: 6, image: './images/The Forest.png', tags: ['шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ'], name: 'The Forest  ', rate: 4.5, price: 1000, discount: '40%', originalPrice: 1000, discountEnd: '30.02.2023 10:00' },

];

function CardsWishlists(props) {
  const { image, name, tags, rate, price, discount, originalPrice, discountEnd } = props.item;
  const visibleTags = tags.slice(0, 4);
  const extraTags = tags.length - 4;

  return (
    <div className='GameCard'>
      <img src={image} alt={name} className='GameCardImage' />
      <div className='GameCardInfo'>
        <div className='GameCardTop'>
          <h2 className='GameCardName'>{name}</h2>
          <img src='./images/Cross.svg' alt='Cross' className='CrossIcon' />
        </div>

        <div className='GameCardTags'>
          {visibleTags.map((tag, index) => (
            <span key={index} className='GameCardTag'>{tag}</span>
          ))}
          {extraTags > 0 && <span className='GameCardTag'>+{extraTags}</span>}
        </div>

        <div className='GameCardBottom'>
          <div className='GameCardRate'>
            <span>{rate}</span>
            <img src='./images/Star icon.svg' alt='Star' className='StarIcon' />
          </div>
          <div className='GameCardPriceBlock'>
            <span className='GameCardDiscount'>-{discount}</span>
            <div className='GameCardPrices'>
              <span className='GameCardCurrentPrice'>{price} ₴</span>
              <span className='GameCardOriginalPrice'>{originalPrice} ₴</span>
            </div>
            {discountEnd && <span className='GameCardDiscountEnd'>Знижка діє до {discountEnd}</span>}
          </div>
          <button className='CartBTN'>У кошик</button>
        </div>
      </div>
    </div>
  );
}

export function CardsWishlistsRender() {
  return (
    <div className='CardsWishlistsContainer'>
      {cardsData.map(card => (
        <CardsWishlists key={card.id} item={card} />
      ))}
    </div>
  );
}