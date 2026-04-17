import { SliderOfHorizontalCards } from '../HorizontalCards/HorizontalCards';
import { HorizontalCardsSquare } from '../HorizontalCardsBlock/HorizontalCardsBlock';
import Search from '../Search/Search';
import './Mainpage.css';
import { SliderOfVerticalCards } from '../VerticalCards/VerticalCards';
import Main_Picture from '../Main_Picture/Main_Picture';
import { CategoryNameBlock } from '../CategoryName/CategoryName';
import { CategoriesBlock } from '../BlockCategories/BlockCategories'

function Mainpage() {
    return (
      <div className="Mainpage">
        <Main_Picture />
        <CategoryNameBlock title={'Особливі пропозиції'} />
        <SliderOfHorizontalCards />
        <CategoryNameBlock title={'Рекомендовані вам'} />
        <SliderOfVerticalCards option={1} />
        <CategoryNameBlock title={'До 100₴'} />
        <SliderOfVerticalCards option={2} />
        <CategoriesBlock />
        <HorizontalCardsSquare />
      </div>
    );

  }

export default Mainpage;
