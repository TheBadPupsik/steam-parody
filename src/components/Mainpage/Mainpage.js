import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { SliderOfHorizontalCards } from '../HorizontalCards/HorizontalCards';
import Search from '../Search/Search';
import './Mainpage.css';

function Mainpage() {
  return (
    <div className="Mainpage">
      <Header> </Header>
      <Search></Search>
      <SliderOfHorizontalCards/>
      <Footer></Footer>
    </div>
  );

}

export default Mainpage;
