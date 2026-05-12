import './Dlc_Pages.css';
import { DlcCard } from '../DlcCard/DlcCard';

export function Dlc_Pages() {

  const dlcData = [
    {
      image: '/pictures/dlc_pages_1.png',
      title: 'Cyberpunk 2077 Bonus Content',
      rating: 4.5,
      price: 'Безкоштовно',
      description: 'До цифрового набору включено:- Оригінальний саундтрек, Арт-бук із добіркою ігрових малюнків, Цифровий комікс Cyberpunk 2077: Your Voice, Книжкова збірка «Cyberpunk 2020», Шпалери '
    },
    {
      image: '/pictures/dlc_pages_3.png',
      title: 'Cyberpunk 2077: Ілюзія свободи',
      rating: 4.8,
      price: 'Безкоштовно',
      description: 'Cyberpunk 2077: Ілюзія свободи (англ. Cyberpunk 2077: Phantom Liberty) — доповнення до відеогри Cyberpunk 2077 (2020), видане польською компанією CD Projekt RED 26 вересня 2023 року для Microsoft Windows, PlayStation 5 і Xbox Series X/S'
    },
    {
      image: '/pictures/dlc_pages_2.png',
      title: 'Cyberpunk 2077 REDmod',
      rating: 4.6,
      price: 'Безкоштовно',
      description: 'Інструменти модифікації Cyberpunk 2077: -Завантажте REDmod — офіційні інструменти модифікації Cyberpunk 2077 — щоб змінювати та створювати власні враження від Cyberpunk 2077. '
    }
  ];

  return (
    <div className='app_dlc_pages'>
      <img src='/pictures/dlc_pitures.png' alt="picture" className='main_picrure_all_dcls'/>
      <div id="gradient"></div>

      <p id='upload_text'>Завантажуваний контент для</p>
      <p id='upload_text2'>Якась гра, яка дуже всім сподобається</p>

      <div className='cards_dlc_etc'>
        <div className='etc_cards'>
          <div className='etc_cards1'>
            <input placeholder='Пошук...' />

            <div className='fix_horisontal'>
              <img src='/pictures/etc_menu_.png' alt="menu" className='etc_menu_'/> 
              <p>Фільтри</p>
            </div>
          </div>

          <div className='etc_cards2'>
            <p id='first_etc_cards'>Сортування:</p>
            <p id='first_etc_cards2'>За релевантністю</p>
            <img src='/pictures/down.png' alt="arrow" className='down_picture_etc'/>
          </div>
        </div>

        <div className='cards_dlc_pages'>
          {dlcData.map((item, index) => (
            <DlcCard
              key={index}
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dlc_Pages;