import './News.css';
import { NavLink } from 'react-router-dom';

export function News()
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

          <div className="s_sort"> 
            <nav> 
              <NavLink to="/community" className={({ isActive }) => isActive ? "active_link" : ""} id="first_first" > Усі розділи </NavLink> 
              <NavLink to="/forum" className={({ isActive }) => isActive ? "active_link" : ""} > Форум </NavLink> 
              <NavLink to="/screenshotes" className={({ isActive }) => isActive ? "active_link" : ""} > Скріншоти </NavLink> 
              <NavLink to="/videos" className={({ isActive }) => isActive ? "active_link" : ""} > Відео </NavLink> 
              <NavLink to="/guides" className={({ isActive }) => isActive ? "active_link" : ""} > Гайди </NavLink> 
              <NavLink to="/news" className={({ isActive }) => isActive ? "active_link" : ""} > Новини </NavLink> 
              </nav> 
          </div>
        </div>

        <div className='main_div_community'>
          <div className='first_cards_news' id='fix_videos'>
            <img src='/pictures/portal.png' alt="pic" id='fix_picture'/>
            <div className='f_big_desc'>
              <div className='first_desc' id='just_fix_me'>
                <div className='ava_plus_nickname'>
                  <div><img src='/pictures/kruta_ava.png' alt="ava"/><p>NikaNii</p></div>
                  <p>25.02.2024</p>
                </div> 
                 <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
              </div>
              <div className='second_desc'>
                <p id='fir'>Цікавий заголовок новин</p>
                <p id='sec'>Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis. Eu non faucibus varius orci eleifend vitae. Arcu et etiam urna neque ut. </p>
              </div>
              <div className='third_desc'>
                <div className='third_desc_b1'><img src='/pictures/h1.png' alt="heart"/>2.5k</div>
                <div className='third_desc_b2'><img src='/pictures/c1.png' alt="comment"/>2.5k</div>
                <div className='third_desc_b2'><img src='/pictures/share.png' alt="share"/>Поділитись</div>
              </div>
            </div>
          </div>

          <div className='first_cards_news'>
            <img src='/pictures/portal.png' alt="pic"/>
            <div className='f_big_desc'>
              <div className='first_desc' id='just_fix_me'>
                <div className='ava_plus_nickname'>
                  <div><img src='/pictures/kruta_ava.png' alt="ava"/><p>NikaNii</p></div>
                  <p>25.02.2024</p>
                </div> 
                 <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
              </div>
              <div className='second_desc'>
                <p id='fir'>Цікавий заголовок новин</p>
                <p id='sec'>Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis. Eu non faucibus varius orci eleifend vitae. Arcu et etiam urna neque ut. </p>
              </div>
              <div className='third_desc'>
                <div className='third_desc_b1'><img src='/pictures/h1.png' alt="heart"/>2.5k</div>
                <div className='third_desc_b2'><img src='/pictures/c1.png' alt="comment"/>2.5k</div>
                <div className='third_desc_b2'><img src='/pictures/share.png' alt="share"/>Поділитись</div>
              </div>
            </div>
          </div>

          <div className='first_cards_news'>
            <img src='/pictures/portal.png' alt="pic"/>
            <div className='f_big_desc'>
              <div className='first_desc' id='just_fix_me'>
                <div className='ava_plus_nickname'>
                  <div><img src='/pictures/kruta_ava.png' alt="ava"/><p>NikaNii</p></div>
                  <p>25.02.2024</p>
                </div> 
                 <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
              </div>
              <div className='second_desc'>
                <p id='fir'>Цікавий заголовок новин</p>
                <p id='sec'>Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis. Eu non faucibus varius orci eleifend vitae. Arcu et etiam urna neque ut. </p>
              </div>
              <div className='third_desc'>
                <div className='third_desc_b1'><img src='/pictures/h1.png' alt="heart"/>2.5k</div>
                <div className='third_desc_b2'><img src='/pictures/c1.png' alt="comment"/>2.5k</div>
                <div className='third_desc_b2'><img src='/pictures/share.png' alt="share"/>Поділитись</div>
              </div>
            </div>
          </div>

          <div className='first_cards_news'>
            <img src='/pictures/portal.png' alt="pic"/>
            <div className='f_big_desc'>
              <div className='first_desc' id='just_fix_me'>
                <div className='ava_plus_nickname'>
                  <div><img src='/pictures/kruta_ava.png' alt="ava"/><p>NikaNii</p></div>
                  <p>25.02.2024</p>
                </div> 
                 <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
              </div>
              <div className='second_desc'>
                <p id='fir'>Цікавий заголовок новин</p>
                <p id='sec'>Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis. Eu non faucibus varius orci eleifend vitae. Arcu et etiam urna neque ut. </p>
              </div>
              <div className='third_desc'>
                <div className='third_desc_b1'><img src='/pictures/h1.png' alt="heart"/>2.5k</div>
                <div className='third_desc_b2'><img src='/pictures/c1.png' alt="comment"/>2.5k</div>
                <div className='third_desc_b2'><img src='/pictures/share.png' alt="share"/>Поділитись</div>
              </div>
            </div>
          </div>

          <div className='first_cards_news'>
            <img src='/pictures/portal.png' alt="pic"/>
            <div className='f_big_desc'>
              <div className='first_desc' id='just_fix_me'>
                <div className='ava_plus_nickname'>
                  <div><img src='/pictures/kruta_ava.png' alt="ava"/><p>NikaNii</p></div>
                  <p>25.02.2024</p>
                </div> 
                 <img src='/pictures/etc_.png' alt="etc" className='etc_comm'/>
              </div>
              <div className='second_desc'>
                <p id='fir'>Цікавий заголовок новин</p>
                <p id='sec'>Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis. Eu non faucibus varius orci eleifend vitae. Arcu et etiam urna neque ut. </p>
              </div>
              <div className='third_desc'>
                <div className='third_desc_b1'><img src='/pictures/h1.png' alt="heart"/>2.5k</div>
                <div className='third_desc_b2'><img src='/pictures/c1.png' alt="comment"/>2.5k</div>
                <div className='third_desc_b2'><img src='/pictures/share.png' alt="share"/>Поділитись</div>
              </div>
            </div>
          </div>

           

        </div>
    </div>
  )
}
export default News;