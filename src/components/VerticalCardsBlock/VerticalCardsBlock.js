import './VerticalCardsBlock.css';
import { VerticalCards } from '../VerticalCards/VerticalCards'

const games = [
  { id: 1, image: './pictures/fall.png', name: 'Fallout 4', price: 100, discount: 40, originalPrice: 365 },
  { id: 2, image: './pictures/sky.png', name: 'THE ELDER SCROLLS V: SKYRIM ANNIVERSARY EDITION', price: 100, discount: 40, originalPrice: 365 },
  { id: 3, image: './pictures/hog.png', name: 'Hogwarts Legacy', price: 1000 },
  { id: 4, image: './pictures/ring.png', name: 'ELDEN RING', price: 1200 },
  { id: 5, image: './pictures/final.png', name: 'FINAL FANTASY XIV Online', price: 800 },
  { id: 6, image: './pictures/desert.png', name: 'Black Desert', price: 560 },
  { id: 7, image: './pictures/hunter.png', name: 'Monster Hunter: World', price: 100, discount: 40, originalPrice: 365 },
  { id: 8, image: './pictures/sea.png', name: 'Sea of Thieves: 2024 Edition', price: 'Безкоштовно'},
  { id: 9, image: './pictures/dying.png', name: 'Dying Light', price: 200 }
];

export function VerticalCardsSquare() {
  return <div className='block-cards-vert'>
    {
      games.map((game) => (
        <VerticalCards
          key={game.id}
          {...game}
        />
      ))
    }
  </div>
}