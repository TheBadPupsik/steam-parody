import './ScreenShotes.css';
import { NavLink } from 'react-router-dom';
import { ScreenShotesCards } from '../ScreenShotesCards/ScreenShotesCards';

export function ScreenShotes() {

  const posts = [
    {
      avatar: '/pictures/kruta_ava.png',
      name: 'Юзернейм',
      date: '25.02.2024',
      image: '/pictures/gold_eggs.png'
    },
    {
      avatar: '/pictures/kruta_ava.png',
      name: 'Юзернейм',
      date: '25.02.2024',
      image: '/pictures/gold_eggs.png'
    },
    {
      avatar: '/pictures/kruta_ava.png',
      name: 'Юзернейм',
      date: '25.02.2024',
      image: '/pictures/gold_eggs.png'
    },
    {
      avatar: '/pictures/kruta_ava.png',
      name: 'Юзернейм',
      date: '25.02.2024',
      image: '/pictures/gold_eggs.png'
    }
  ];

  return (
    <div className='app_com'>

      <div className='main_title_com'>
        <div className='main_title_com_1'>
          <p className='title_cyberpunk_forum'>
            Якась гра, яка дуже всім сподобається
          </p>

          <div className='subscribe'>
            <div className='first_sub'>
              <p className='first_text_comm'>3421</p>
              <p className='second_text_comm'>підписників</p>
            </div>

            <div className='second_sub'>
              <p className='just_first_text'>121</p>
              <img src='/pictures/elipse.png' alt="elipse"/>
            </div>
          </div>
        </div>

        <div className='main_title_com_2'>
          <button className='first_button_comm'>
            <img src='/pictures/plus.png' alt="plus"/>
            <p>Створити пост</p>
          </button>

          <button className='second_button_comm'>
            <img src='/pictures/bell2.png' alt="bell"/>
          </button>

          <button className='third_button_comm'>
            <img src='/pictures/etc_.png' alt="etc"/>
          </button>
        </div>
      </div>

      <div className='sort_by'>
        <div className='f_sort'>
          <div className='sort_pop'>
            <p id='first_sort'>Сортування:</p>
            <p id='second_sort'>Популярні</p>
            <img src='/pictures/down4.png' alt="elipse"/>
          </div>

          <input className='input_button' placeholder='Пошук: Усі розділи'/>
        </div>

        <div className="s_sort">
          <nav>
            <NavLink to="/community" className={({ isActive }) => isActive ? "active_link" : ""}>
              Усі розділи
            </NavLink>
            <NavLink to="/forum" className={({ isActive }) => isActive ? "active_link" : ""}>
              Форум
            </NavLink>
            <NavLink to="/screenshotes" className={({ isActive }) => isActive ? "active_link" : ""}>
              Скріншоти
            </NavLink>
            <NavLink to="/videos" className={({ isActive }) => isActive ? "active_link" : ""}>
              Відео
            </NavLink>
            <NavLink to="/guides" className={({ isActive }) => isActive ? "active_link" : ""}>
              Гайди
            </NavLink>
            <NavLink to="/news" className={({ isActive }) => isActive ? "active_link" : ""}>
              Новини
            </NavLink>
          </nav>
        </div>
      </div>

      <div className='main_div_community' id='id_com1'>
        {posts.map((post, index) => (
          <ScreenShotesCards key={index} {...post} />
        ))}
      </div>

    </div>
  );
}

export default ScreenShotes;