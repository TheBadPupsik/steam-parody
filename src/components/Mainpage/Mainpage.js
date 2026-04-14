import { SliderOfHorizontalCards } from '../HorizontalCards/HorizontalCards';
import Search from '../Search/Search';
import './Mainpage.css';

function Mainpage() {
  return (
    <div className="Mainpage">
      <Search></Search>
      <SliderOfHorizontalCards/>
    </div>
  );

}

export default Mainpage;
