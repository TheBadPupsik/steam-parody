import { HorizontalCards } from '../HorizontalCards/HorizontalCards';
import './HorizontalCardsBlock.css';
import '../HorizontalCards/HorizontalCards';

const games = [
  { id: 1, image: 'cyberpank.png', name: 'Baldurs Gate 3', price: 899 },
  { id: 2, image: 'witcher.png', name: 'Destiny 2: The Final Shape', price: 1249 },
  { id: 3, image: 'manor.png', name: 'Soul Dossier', price: 'Безкоштовно' },
  { id: 4, image: 'rdr2.png', name: 'Kingdom Come: Deliverance', price: 159, discount: 80, originalPrice: 799 },
  { id: 5, image: 'elden.png', name: 'Sun Haven', price: 230, discount: 30, originalPrice: 329 },
  { id: 6, image: 'witcher.png', name: 'Counter-Strike 2', price: 'Безкоштовно' },
  { id: 7, image: 'witcher.png', name: 'Project Zomboid', price: 414 },
  { id: 8, image: 'elden.png', name: 'Subnautica', price: 899, discount: 10, originalPrice: 1348 },
  { id: 9, image: 'witcher.png', name: 'RAID: Shadow Legends', price: 'Безкоштовно' }
];

export function HorizontalCardsSquare() {
  return <div className='block-cards'>
    {
      games.map((game) => (
        <HorizontalCards
          key={game.id || game.name}
          data={game}
        />
      ))
    }
  </div>
}
