import './HorizontalCards.css';
import { useState } from 'react';

const games = [
  { image: 'cyberpank.png', name: 'Cyberpunk 2077', price: 1099 },
  { image: 'witcher.png', name: 'Відьмак 3: Дикий гін', price: 729 },
  { image: 'manor.png', name: 'Manor Lords', price: 449, discount: 25, originalPrice: 599 },
  { image: 'rdr2.png', name: 'Red Dead Redemption 2', price: 899 },
  { image: 'elden.png', name: 'Elden Ring', price: 1299, discount: 10, originalPrice: 1499 },
];

export function HorizontalCards({ image, name, price, discount, originalPrice }) {
  return (
    <div className='game-card-short'>
      <img src={image} alt={name}></img>
      <div className='game-card-short-info'>
        <h2>{name}</h2>
        <div className="game-card-price-row">
          {discount && (
            <span className="game-card-discount">-{discount}%</span>
          )}
          <h4>{price}₴</h4>
          {originalPrice && (
            <span className="game-card-original-price">{originalPrice}₴</span>
          )}
        </div>
      </div>
    </div>
  )
}

export function SliderOfHorizontalCards() {

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const total = games.length;

  const getGame = (i) => games[((i % total) + total) % total];

  const prev = () => setStartIndex(i => i - 1);
  const next = () => setStartIndex(i => i + 1);

  return (
    <div className="slider-wrapper">
      <button className="slider-btn slider-btn-left" onClick={prev}>‹</button>
      <div className="horizontal-slider">
        {Array.from({ length: visibleCount }, (_, i) => {
          const game = getGame(startIndex + i);
          return <HorizontalCards key={startIndex + i} {...game} />;
        })}
      </div>
      <button className="slider-btn slider-btn-right" onClick={next}>›</button>
    </div>
  );
}
