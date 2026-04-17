import './VerticalCards.css';
import { useState } from 'react';

const games = [
  { image: './pictures/bell.png', name: 'Bellwright', price: 600 },
  { image: './pictures/stard.png', name: 'Stardew Valley', price: 229 },
  { image: './pictures/ghost.png', name: 'Ghost of Tsushima', price: 1699},
  { image: './pictures/avatar2.png', name: 'Avatar: Frontiers of Pandora', price: 911, discount: 40, originalPrice: 1519 },
  { image: './pictures/halo.png', name: 'Halo: The Master Chief Collection', price: 1399},
];

const games2 = [
  { image: './pictures/bell.png', name: 'FAR: Lone Sails',  price: 34, discount: 85, originalPrice: 229 },
  { image: './pictures/stard.png', name: 'Placid Plastic Duck Simulator', price: 60 },
  { image: './pictures/ghost.png', name: 'The Escape: Together', price: 74},
  { image: './pictures/avatar2.png', name: 'Juro Janosik', price: 74, discount: 69, originalPrice: 245 },
  { image: './pictures/halo.png', name: 'Halo: The Master Chief Collection', price: 1399},
];

const collections = {
  1: games,
  2: games2,
};

export function VerticalCards({ image, name, price, discount, originalPrice }) {
  return (
    <div className='game-card-short-vert'>
      <img src={image} alt={name}></img>
      <div className='game-card-short-info-vert'>
        <h2>{name}</h2>
        <div className="game-card-price-row-vert">
          {discount && (
            <span className="game-card-discount-vert">-{discount}%</span>
          )}
          <h4>{price}{typeof price === 'number' ? '₴' : ''}</h4>
          {originalPrice && (
            <span className="game-card-original-price-vert">{originalPrice}₴</span>
          )}
        </div>
      </div>
    </div>
  )
}

export function SliderOfVerticalCards({option}) {
  const currentGames = collections[option] || collections[1];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const total = currentGames.length;

  const getGame = (i) => currentGames[((i % total) + total) % total];

  const prev = () => setStartIndex(i => i - 1);
  const next = () => setStartIndex(i => i + 1);

  return (
    <div className="slider-wrapper">
      <button className="slider-btn slider-btn-left" onClick={prev}>‹</button>
      <div className="horizontal-slider">
        {Array.from({ length: visibleCount }, (_, i) => {
          const game = getGame(startIndex + i);
          return <VerticalCards key={`${option}-${startIndex + i}`} {...game} />;
        })}
      </div>
      <button className="slider-btn slider-btn-right" onClick={next}>›</button>
    </div>
  );
}
