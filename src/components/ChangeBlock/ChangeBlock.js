import { ListCardsBlock } from '../ListCards/ListCards';
import { VerticalCardsSquare } from '../VerticalCardsBlock/VerticalCardsBlock';
import './ChangeBlock.css';

export function ChangeBlock({ viewMode }) {
  return (
    <div>
      {
        viewMode === 'grid'
          ? <VerticalCardsSquare/>
          : <ListCardsBlock/>
      }
    </div>
  )
}