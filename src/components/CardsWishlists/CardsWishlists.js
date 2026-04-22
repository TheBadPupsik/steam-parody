import './CardsWishlists.css';

const cardsData = [
  { id: 1, image: './images/ARK.png', tags: ['Екшен', 'Пригоди', 'Рольова гра'], name: 'ARK: Survival Evolved', price: 100, discount: '40%', originalPrice: 365 },

]

function CardsWishlists(props) {
  return (
    <div className='GameCard'>
      <img src={props.item.image} alt={props.item.name} className='GameCardImage' />
      <div className='GameCardInfo'>
        <h2 className='GameCardName'>{props.item.name}</h2>
        <img src='./images/Cross.svg' alt='Cross' />
        <div className='GameCardTags'>
          {props.item.tags.map((tag, index) => (
            <span key={index} className='GameCardTag'>{tag}</span>
          ))}
        </div>
        <div className='GameCardPrice'>
          <span className='GameCardDiscount'>{props.item.discount}</span>
          <span className='GameCardCurrentPrice'>{props.item.price} ₴</span>
          <span className='GameCardOriginalPrice'>{props.item.originalPrice} ₴</span>          
          <span className='CartBTN'>У кошик</span>
        </div>
      </div>
    </div>
  );
}

export function CardsWishlistsRender(props) {
  return (
    <div className='CardsWishlistsContainer'>
      {cardsData.map(card => (
        <CardsWishlists key={card.id} item={card} />
      ))}
    </div>
  );
}
