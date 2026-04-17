import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { SliderOfHorizontalCards } from '../HorizontalCards/HorizontalCards';
import { HorizontalCardsSquare } from '../HorizontalCardsBlock/HorizontalCardsBlock';
// import { Main_Picture } from '../Main_Picture/Main_Picture';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import './Mainpage.css';
import { SliderOfVerticalCards } from '../VerticalCards/VerticalCards';
import Main_Picture from '../Main_Picture/Main_Picture';

function Mainpage() {
  return (
    <div className="Mainpage">
      <Header />
      <Search></Search>
      <Main_Picture />
      <SliderOfHorizontalCards />
      <SliderOfVerticalCards option={1}/>
      <SliderOfVerticalCards option={2}/>
      <HorizontalCardsSquare />
      <Footer />
    </div>
  );

}

export default Mainpage;
