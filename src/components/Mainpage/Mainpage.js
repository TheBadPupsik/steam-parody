import Footer from '../Footer/Footer' ;
import Header from '../Header/Header';
import { SliderOfHorizontalCards } from '../HorizontalCards/HorizontalCards';
import { HorizontalCardsSquare } from '../HorizontalCardsBlock/HorizontalCardsBlock';
// import { Main_Picture } from '../Main_Picture/Main_Picture';
import Search from '../Search/Search';
import './Mainpage.css';

function Mainpage() {
  return (
    <div className="Mainpage">
      <Header/>
      <Search></Search>
      <SliderOfHorizontalCards/>
      <HorizontalCardsSquare/>
      <Footer/>
    </div>
  );

}

export default Mainpage;
