import { HorizontalCards } from '../HorizontalCards/HorizontalCards';
import './HorizontalCardsBlock.css';

const games = [
  { image: 'cyberpank.png', name: 'Cyberpunk 2077', price: 1099 },
  { image: 'witcher.png', name: 'Відьмак 3: Дикий гін', price: 729 },
  { image: 'manor.png', name: 'Manor Lords', price: 449, discount: 25, originalPrice: 599 },
  { image: 'rdr2.png', name: 'Red Dead Redemption 2', price: 899 },
  { image: 'elden.png', name: 'Elden Ring', price: 1299, discount: 10, originalPrice: 1499 },
];

export function HorizontalCardsSquare() {
  return <div>
    <HorizontalCards/>
  </div>
}
