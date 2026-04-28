import './CartPage.css';

const cardsData = [
  { id: 1, image: './images/Grounded.png', name: 'Grounded', price: 1000, discount: null, originalPrice: null },
  { id: 2, image: './images/Terraria.png', name: 'Terraria', price: 1000, discount: '40%', originalPrice: 1000 },
  { id: 3, image: './images/Valheim.png', name: 'Valheim', price: 1000, discount: null, originalPrice: null },
  
];

function CartPage(props) {
  return (
    <div className="CartCard">
      <img src={props.item.image} alt={props.item.name} className='CartCardImage' />
      <div className='CartCardInfo'>
        <div className='CartCardTop'>
          <h2 className='CartCardName'>{props.item.name}</h2>
          <span><img src='./images/Cross.svg'></img></span>
        </div>
        <div className='CartCardBottom'>
          <span className='CartCardWishlist'>Перемістити до Бажаного</span>
          <div className='CartCardPrice'>
            {props.item.discount && (
              <span className='CartCardDiscount'>{props.item.discount}</span>
            )}
            <span className='CartCardCurrentPrice'>{props.item.price} ₴</span>
            {props.item.originalPrice && (
              <span className='CartCardOriginalPrice'>{props.item.originalPrice} ₴</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CartPageRender() {
  const total = cardsData.reduce((sum, card) => sum + card.price, 0);

  return (

    <div className='CartPageContainer'>
      <div className='CardStorage'>
        {cardsData.map(card => (
          <CartPage key={card.id} item={card} />
        ))}
      </div>

      <div className='CartSummary'>
        <div className='CartSummaryRow'>
          <span>Ви заощадите</span>
          <span>1000 ₴</span>
        </div>
        <div className='CartSummaryRow'>
          <span>Усього</span>
          <span>{total} ₴</span>
        </div>
        <p className='CartSummaryNote'>Якщо застосовно, податок із продажу буде розраховано в процесі оплати.</p>
        <button className='CartBtnPrimary'>Перейти до оплати</button>
        <button className='CartBtnSecondary'>Продовжити покупки</button>
        <span className='CartBtnClear'>Очистити кошик</span>
      </div>
    </div>
  );
}