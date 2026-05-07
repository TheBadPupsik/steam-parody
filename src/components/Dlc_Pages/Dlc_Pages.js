import './Dlc_Pages.css';
import { NavLink } from 'react-router-dom';

export function Dlc_Pages()
{
  return (
    <div className='app_dlc_pages'>
      <img src='/pictures/dlc_pitures.png' alt="picture" className='main_picrure_all_dcls'/>
      <div id="gradient"></div>
      <p id='upload_text'>Завантажуваний контент для</p>
      <p id='upload_text2'>Якась гра, яка дуже всім сподобається</p>

      <div className='cards_dlc_etc'>
        <div className='etc_cards'>
          <div className='etc_cards1'>
            <input placeholder='Пошук...'></input>
            <div className='fix_horisontal'>
              <img src='/pictures/etc_menu_.png' alt="picture" className='etc_menu_'/> 
              <p>Фільтри</p>
            </div>
          </div>

           <div className='etc_cards2'>
              <p id='first_etc_cards'>Сортування:</p>
              <p id='first_etc_cards2'>За релевантністю</p>
              <img src='/pictures/down.png' alt="picture" className='down_picture_etc'/>
          </div>
        </div>
      </div>
    </div>
    );
  }
  export default Dlc_Pages;