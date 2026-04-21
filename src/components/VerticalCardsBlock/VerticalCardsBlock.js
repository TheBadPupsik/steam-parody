import './VerticalCardsBlock.css';
import { VerticalCards } from '../VerticalCards/VerticalCards'

const games = [
  { id: 1, image: './pictures/bald.png', name: 'Baldurs Gate 3', price: 899 },
  { id: 2, image: './pictures/dest.png', name: 'Destiny 2: The Final Shape', price: 1249 },
  { id: 3, image: './pictures/soul.png', name: 'Soul Dossier', price: 'Безкоштовно' },
  { id: 4, image: './pictures/kind.png', name: 'Kingdom Come: Deliverance', price: 159, discount: 80, originalPrice: 799 },
  { id: 5, image: './pictures/sun.png', name: 'Sun Haven', price: 230, discount: 30, originalPrice: 329 },
  { id: 6, image: './pictures/cs.png', name: 'Counter-Strike 2', price: 'Безкоштовно' },
  { id: 7, image: './pictures/zomb.png', name: 'Project Zomboid', price: 414 },
  { id: 8, image: './pictures/sub.png', name: 'Subnautica', price: 899, discount: 10, originalPrice: 1348 },
  { id: 9, image: './pictures/raid.png', name: 'RAID: Shadow Legends', price: 'Безкоштовно' }
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