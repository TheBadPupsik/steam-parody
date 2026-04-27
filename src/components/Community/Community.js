import './Community.css';

export function Community()
{
  return(
    <div className='app'>
        <div className='main_title_com'>
          <div className='main_title_com_1'>
            <p className='title_cyberpunk'>Cyberpunk 2077</p>
            <div className='subscribe'>
              <div className='first_sub'>
                <p className='first_text_comm'>10 000</p>
                <p className='second_text_comm'>підписників</p>
              </div>
              <div className='second_sub'>
                  <p className='just_first_text'>5 267</p>
                  <img src='/pictures/elipse.png' alt="elipse"/>
              </div>
            </div>
          </div>
          <div className='main_title_com_2'>
            <button className='first_button_comm'>
              <img src='/pictures/plus.png' alt="plus"/>
              <p>Створити пост</p>
            </button>
            <button className='second_button_comm'><img src='/pictures/bell2.png' alt="bell"/></button>
            <button className='third_button_comm'><img src='/pictures/etc_.png' alt="etc"/></button>
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

          <div className='s_sort'>
            <p id='first_first'>Усі розділи</p>
            <p>Форум</p>
            <p>Скріншоти</p>
            <p>Відео</p>
            <p>Гайди</p>
            <p>Новини</p>
          </div>
        </div>

        <div className='main_div_community'>
          <div className='f_big_card'>
            <img src='/pictures/first_pic_big.png' alt="pic"/>

            <div className='f_big_desc'>
              <div className='first_desc'>
                <div className='ava_plus_nickname'>
                  <div><img src='/pictures/kruta_ava.png' alt="ava"/><p>NikaNii</p></div>
                  <p>25.02.2024</p>
                </div> 
                 <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
              </div>
              <div className='second_desc'>
                <p id='fir'>Питання для початківців</p>
                <p id='sec'>Я трохи втратив уявлення про цю гру: На даний момент у мене 9 рівень (новий у грі), і коли я переходжу на свою сторінку з кіберпрограмами, там написано, що потрібно відвідати розкопувач, щоб оновити їх. Але коли я туди потрапляю, у мене не вистачає компонентів для оновлення.</p>
              </div>
              <div className='third_desc'>
                <div className='third_desc_b1'><img src='/pictures/h1.png' alt="heart"/>1.5k</div>
                <div className='third_desc_b2'><img src='/pictures/c1.png' alt="comment"/>500</div>
                <div className='third_desc_b2'><img src='/pictures/share.png' alt="share"/>Поділитись</div>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}
export default Community;