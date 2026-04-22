import './ListCards.css';

const games = [
  { id: 1, image: './pictures/fall2.png', name: 'Fallout 4', price: 100, discount: 40, originalPrice: 365 },
  { id: 2, image: './pictures/sky2.png', name: 'THE ELDER SCROLLS V: SKYRIM ANNIVERSARY EDITION', price: 100, discount: 40, originalPrice: 365 },
  { id: 3, image: './pictures/hog2.png', name: 'Hogwarts Legacy', price: 1000 },
  { id: 4, image: './pictures/ring2.png', name: 'ELDEN RING', price: 1200 },
  { id: 5, image: './pictures/final2.png', name: 'FINAL FANTASY XIV Online', price: 800 },
  { id: 6, image: './pictures/desert2.png', name: 'Black Desert', price: 560 },
  { id: 7, image: './pictures/hunter2.png', name: 'Monster Hunter: World', price: 100, discount: 40, originalPrice: 365 },
  { id: 8, image: './pictures/sea2.png', name: 'Sea of Thieves: 2024 Edition', price: 'Безкоштовно' },
  { id: 9, image: './pictures/dying2.png', name: 'Dying Light', price: 200 },
  { id: 10, image: './pictures/dead.png', name: 'Dead Island 2', price: 899 },
  { id: 11, image: './pictures/left4.png', name: 'Left 4 Dead 2',  price: 100, discount: 40, originalPrice: 365 },
  { id: 12, image: './pictures/floor.png', name: 'Killing Floor 2', price: 200 },
  { id: 13, image: './pictures/monster.png', name: 'Monster Hunter: World', price: 600 },
  { id: 14, image: './pictures/apex.png', name: 'Apex Legends',price: 'Безкоштовно' },
  { id: 15, image: './pictures/rust.png', name: 'Rust', price: 380 }
];

function ListCard({ image, name, price, discount, originalPrice }) {
  return (
    <div className='list-card'>
      <div className='left-block'>
        <img src={image} alt={name}></img>
        <h2>{name}</h2>
      </div>
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
  )
}

export function ListCardsBlock() {
  return <div className='list-wrapper'>
    {
      games.map((game) => (
        <ListCard
          key={game.id}
          {...game}
        />
      ))
    }
  </div>
}
