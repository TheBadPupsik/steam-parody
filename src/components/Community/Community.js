import './Community.css';

export function Community()
{
  return(
    <div className='app_com'>
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

           <div className='s_big_card'>
            <div className='first_desc'>
                <div className='ava_plus_nickname'>
                  <div><img src='/pictures/kruta_ava.png' alt="ava"/><p>NikaNii</p></div>
                  <p>25.02.2024</p>
                </div> 
                <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
            </div>
            <img src='/pictures/first_p.png' alt="etc"/>
            <p id='thi'>Привіт, на попередній вечірці мені вдалося отримати цей квест. У тому, що я зараз роблю. У тому, що я зараз роблю, воно не хоче з’являтися. Є спосіб змусити її з'явитися чи ні?</p>
            <div className='third_desc'>
                <div className='third_desc_b1'><img src='/pictures/h1.png' alt="heart"/>5.3k</div>
                <div className='third_desc_b2'><img src='/pictures/c1.png' alt="comment"/>4.5k</div>
                <div className='third_desc_b2'><img src='/pictures/share.png' alt="share"/>Поділитись</div>
            </div>
          </div>

          <div className='t_big_card'>
            <div className='first_desc'>
                <div className='ava_plus_nickname'>
                  <div><img src='/pictures/kruta_ava.png' alt="picture"/><p>NikaNii</p></div>
                  <p>25.02.2024</p>
                </div> 
                <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
            </div>

            <div className='fourth_desc'>
                <img src='/pictures/picture_s.png' alt="picture" className='picture_com_help'/>
                <div className='picture_com_text'>
                  <p id='text_four_c'>Допомогти?</p>
                  <p id='text_five_c'>Чи може хтось створити навчальний посібник про те, як максимально швидко використовувати все в грі як НОВУ ГРУ з самого початку за допомогою Cheat Engine. </p>
                </div>
            </div>

            <div className='third_desc'>
                <div className='third_desc_b1'><img src='/pictures/h1.png' alt="heart"/>100k</div>
                <div className='third_desc_b2'><img src='/pictures/c1.png' alt="comment"/>500</div>
                <div className='third_desc_b2'><img src='/pictures/share.png' alt="share"/>Поділитись</div>
            </div>
          </div>


          <div className='fourth_big_card'>
            <div className='first_desc'>
                <div className='ava_plus_nickname'>
                  <div><img src='/pictures/kruta_ava.png' alt="ava"/><p>NikaNii</p></div>
                  <p>25.02.2024</p>
                </div> 
                <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
            </div>
            <img src='/pictures/pictures_t.png' alt="etc"/>
            <p id='thi'>Як мені вдалося зробити цей прекрасний знімок Джуді в «Чорному сапфірі» перед початком шоу…</p>
            <div className='third_desc'>
                <div className='third_desc_b1'><img src='/pictures/h1.png' alt="heart"/>3.1k</div>
                <div className='third_desc_b2'><img src='/pictures/c1.png' alt="comment"/>1.1k</div>
                <div className='third_desc_b2'><img src='/pictures/share.png' alt="share"/>Поділитись</div>
            </div>
          </div>


          <div className='five_big_card'>
            <div className='first_desc'>
                <div className='ava_plus_nickname'>
                  <div><img src='/pictures/kruta_ava.png' alt="ava"/><p>NikaNii</p></div>
                  <p>25.02.2024</p>
                </div> 
                <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
            </div>
            <p id='text_fiveplus_c'>Летальний чи нелетальний?</p>
            <p id='text_fiveplus_text_c'>Чи є в цьому якісь переваги/недоліки?<br></br>Завжди любив стелс в іграх із кількома варіантами гри, як-от deus-ex. Повна скритність не була моєю найсильнішою стороною, більшість часу або занадто багато в одній зоні, так повно стрілянини тощо.</p>
            <div className='third_desc'>
                <div className='third_desc_b1'><img src='/pictures/h1.png' alt="heart"/>5</div>
                <div className='third_desc_b2'><img src='/pictures/c1.png' alt="comment"/>0</div>
                <div className='third_desc_b2'><img src='/pictures/share.png' alt="share"/>Поділитись</div>
            </div>
          </div>

          <div className='seven_big_card'>
            <div className='first_desc'>
                <div className='ava_plus_nickname'>
                  <div><img src='/pictures/kruta_ava.png' alt="ava"/><p>NikaNii</p></div>
                  <p>25.02.2024</p>
                </div> 
                <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
            </div>
            <p id='text_seven_c'>Мені б хотілося, щоб ресурси відновлення та здібностей були більш уніфікованими.</p>
            <p id='text_sevenplus_c'>Я думаю, що можна було б додати багато глибини, якби CDPR вирішив використовувати Ram як універсальний ресурс, а не використовувати його лише для швидких хаків. Якби Berzerker і Sandevistan використовували Ram замість того, щоб мати власну тривалість і час відновлення, це створило б багато цікавих збірок із використанням деяких бонусів «інтелекту», щоб дійсно максимізувати їхню функціональність.</p>
            <img src='/pictures/mashinka.png' alt="car"/>
            <div className='third_desc'>
                <div className='third_desc_b1'><img src='/pictures/h1.png' alt="heart"/>3.1k</div>
                <div className='third_desc_b2'><img src='/pictures/c1.png' alt="comment"/>1.1k</div>
                <div className='third_desc_b2'><img src='/pictures/share.png' alt="share"/>Поділитись</div>
            </div>
          </div>

        </div>
    </div>
  )
}
export default Community;