import './DLC.css';
import { NavLink } from 'react-router-dom';

export function DLC()
{
  const images = [
    "/pictures/dlc_1.png",
    "/pictures/dlc_2.png",
    "/pictures/dlc_3.png",
    "/pictures/dlc_4.png",
    "/pictures/dlc_5.png",
    "/pictures/dlc_6.png",
  ];

  return (
    <div className='app_dlc'>
      <p className='title'>Cyberpunk 2077: Ілюзія свободи</p>
      <img src='/pictures/dlc_main.png' alt="main" className='main_picture_about' />

      <div className='slider2'>
        {images.map((img, index) => (
          <img key={index} src={img} className='slide_img' />
        ))}
      </div>

      <div className="pictures_small">
          <div className='small_div'>шутер</div>
          <div className='small_div'>екшен</div>
          <div className='small_div'>кіберпанк</div>
          <div className='small_div'>оголеність</div>
          <div className='small_div'>відкритий сайт</div>
          <div className='small_div'>майбутнє</div>
          <div className='small_div'>насильство</div>
          <div className='small_div'><img src='/pictures/down.png' alt="vector"/></div>
      </div>
        
        <div className='text_for_main'>
          <p className='text_for_main_text'>Cyberpunk 2077 — пригодницький бойовик і рольова гра з відкритим світом. Дія відбувається у темному майбутньому Найт-Сіті, небезпечного мегаполіса, одержимого владою, гламуром і ненаситною модифікацією тіла.</p>
          <center><img src='/pictures/Vector.png' alt="vector" className='picture_small_vector'/></center>
        </div>



        <div className='Main_Div'>
          <div className='title_1'>
          <p>5.0</p>
          <div className='stars'>
            <img src='/pictures/star.png' alt="star" className='star'/>
            <img src='/pictures/star.png' alt="star" className='star'/>
            <img src='/pictures/star.png' alt="star" className='star'/>
            <img src='/pictures/star.png' alt="star" className='star'/>
            <img src='/pictures/star.png' alt="star" className='star'/>
          </div>
        </div>
        
          <div className='Main_Div_First'>
            <img src='/pictures/dlc_prev.png' alt="picture" className='Main_div_picture' />
            <p className='Main_div_text'>1 099₴</p>
              <div className='buttons_div'>
                <button className='first_b'>
                <p>Купити</p>
                </button>
                
                <div className='buttons_div_second'>
                  <button className='third_b'><p>Додати у кошик</p></button>
                  <button className='fourth_b'><img src='/pictures/heart.png' alt="heart"/></button>
                </div>

                <div className='repost_report'>
                  <div className='repost'>
                    <img src='/pictures/repost.png' alt="repost"/>
                    <p>Репост</p>
                  </div>

                  <div className='report'>
                    <img src='/pictures/report.png' alt="repost"/>
                    <p>Поскаржитись</p>
                  </div>
                </div>
              </div>

              <div className='description_of_game'>
                <div className='first_des'>
                  <p className='first_d_f'>Дата виходу</p>
                  <p className='first_d_d'>10.12.2020</p>
                </div>
                <div className='first_des'>
                  <p className='first_d_f'>Розробник</p>
                  <p className='first_d_d'>CD PROJEKT RED</p>
                </div>
                <div className='first_des'>
                  <p className='first_d_f'>Видавець</p>
                  <p className='first_d_d'>Zubarik Inc</p>
                </div>
                <div className='first_des'>
                  <p className='first_d_f'>Платформи</p>
                  <div className='pictures_descr'>
                    <img src='/pictures/windows.png' alt="windows"/>
                    <img src='/pictures/mac.png' alt="mac"/>
                  </div>
                </div>
              </div>
          </div>
          <div className='Main_Div_Second'>
            <div className='div_second_first'>
              <p className='just_text'>Друзів бажають цю гру: 2</p>
                <div className='avatars_w'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>GhostRogue</p>
                    </div>
                </div>
                <div className='avatars_w'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>sanya_KAL</p>
                    </div>
                </div>
            </div>
            <div className='div_second_second'>
              <p className='just_text'>Друзів мають цю гру: 11</p>
                <div className='avatars_div'>
                   <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>karl_vava</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>zuzeyka</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>NikaNii</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>s1imerock</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>whysxugly</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>low_owl</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>mop_riderEX</p>
                    </div>
                </div>
                <div className='plus_five'>
                  <p>+5</p>
                </div>
                </div>
            </div>
          </div>
        </div>

        <div className='Main_of_main'>
            <div className='Main_of_first'>
                <div className='complects'>
                  <p>Комплекти</p>
                    <div className='complects_second2'>
                      <div className='first_complect2'>
                          <div id='div_dlc'>
                            <button>Базова гра</button>
                            <p>Cyberpunk 2077</p>
                          </div>
                        
                        <div className='price_desc2'>
                          <p id='put_text2'>1 099₴</p>
                          <button disabled><p className='navig_text' id='navigation_all_dlcs'><NavLink to="/about_game" onClick={() => window.scrollTo(0,0)}> У кошик </NavLink></p></button>
                        </div>
                      </div>
                    </div>
                </div>
          
                <div className='Another_DLC'>
                    <div className='first_dlc' id='second_dlc'>
                      <p>Інші DLC</p>
                      <div className='first_dlc_all'>
                        <p>Усі DLC</p>
                        <img src='/pictures/left_click.png' alt="click"/>
                      </div>
                    </div>

                    <div className='second_dlc'>
                      <div className='DLC_card'>
                        <p>Cyberpunk 2077 Bonus Content</p>
                        <p>Безкоштовно</p>
                      </div>
                      <div className='DLC_card'>
                        <p>Cyberpunk 2077 REDmod</p>
                        <p>Безкоштовно</p>
                      </div>
                      <div className='DLC_card'>
                        <p>Cyberpunk 2077: Ілюзія свободи</p>
                        <p>549₴</p>
                      </div>
                    </div>

                    <div className='third_dlc'>
                      <p>549₴</p>
                      <button disabled><p className='navig_text' id='navigation_all_dlcs'><NavLink to="/dlc_pages" onClick={() => window.scrollTo(0,0)}> Додати в кошик усі DLC </NavLink></p></button>
                    </div>
                </div>
            </div>

            <div className='Main_of_second' id='third_dlc'>
              <div className='Recencii'>
                <p>Рецензії</p>
                <button>Написати рецензію</button>
              </div>  
              <div className='short_text'>
                  <p id='sort_p'>Сортування:</p>
                  <p id='sort2_p'>Спочатку популярні</p>
                  <img src='/pictures/down2.png' alt="down"/>
              </div>
              <div className='Hell_cards'>
                  <div className='hell_cards_real'>
                    <div className='first_cards'>
                        <div className='one_card'>
                          <div className='feedback'>
                              <div className='feedback_real'>
                                <img src='/pictures/feedback_p.png' alt="feedback"/>
                                <div className='rating_stars'>
                                  <p>DenroyPro</p>
                                    <div className='just_stars'>
                                      <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                      <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                      <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                      <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                      <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                    </div>
                                </div>
                              </div>
                              <img src='/pictures/etc.png' alt="star" className='etc'/>
                          </div>

                            <p className='feedback_text' id='first_fe'>Чудова гра</p>
                            <div className='likes_com'>
                                <div className='real_likes_com'>
                                  <div className='likes'>
                                    <img src='/pictures/fed_heart.png' alt="heart"/>
                                    <p>2.5k</p>
                                  </div>
                                  <div className='com'>
                                    <img src='/pictures/fed_com.png' alt="heart"/>
                                    <p>2.5k</p>
                                  </div>
                                </div>
                                <p>21.02.2023</p>
                            </div>
                          </div>
                          <div className='one_card'>
                            <div className='feedback'>
                                <div className='feedback_real'>
                                  <img src='/pictures/feedback_p.png' alt="feedback"/>
                                  <div className='rating_stars'>
                                    <p>DenroyPro</p>
                                      <div className='just_stars'>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/false_heart.png' alt="star" className='star'/>
                                      </div>
                                  </div>
                                </div>
                                <img src='/pictures/etc.png' alt="star" className='etc'/>
                            </div>

                            <p className='feedback_text'>Топчиковий топ. Дякуємо панам та панессам з CDPR за українську локалізацію основної гри та DLC Ілюзія Свободи. Прийдеться проходити гру уже третій раз.</p>
                            <div className='likes_com'>
                                <div className='real_likes_com'>
                                  <div className='likes'>
                                    <img src='/pictures/fed_heart.png' alt="heart"/>
                                    <p>2.5k</p>
                                  </div>
                                  <div className='com'>
                                    <img src='/pictures/fed_com.png' alt="heart"/>
                                    <p>2.5k</p>
                                  </div>
                                </div>
                                <p>21.02.2023</p>
                            </div>
                          </div>
                      </div>
                      <div className='second_cards'>
                          <div className='one_card'>
                            <div className='feedback'>
                                <div className='feedback_real'>
                                  <img src='/pictures/feedback_p.png' alt="feedback"/>
                                  <div className='rating_stars'>
                                    <p>DenroyPro</p>
                                      <div className='just_stars'>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/false_heart.png' alt="star" className='star'/>
                                      </div>
                                  </div>
                                </div>
                                <img src='/pictures/etc.png' alt="star" className='etc'/>
                            </div>

                            <p className='feedback_text' id='first_fe'>Імба. 10 з 10. Незважаючи на баги і проблему з економікою (купую за 50к продаю за 1к) це імба, всі любители рпг з відкритим світом і сюжетом мають в це пограти, також DLC дуже подобаються. Дякуєм за українську, обов'язково до проходження!</p>
                            <div className='likes_com'>
                                <div className='real_likes_com'>
                                  <div className='likes'>
                                    <img src='/pictures/fed_heart.png' alt="heart"/>
                                    <p>2.5k</p>
                                  </div>
                                  <div className='com'>
                                    <img src='/pictures/fed_com.png' alt="heart"/>
                                    <p>2.5k</p>
                                  </div>
                                </div>
                                <p>21.02.2023</p>
                            </div>
                          </div>
                          <div className='one_card'>
                            <div className='feedback'>
                                <div className='feedback_real'>
                                  <img src='/pictures/feedback_p.png' alt="feedback"/>
                                  <div className='rating_stars'>
                                    <p>DenroyPro</p>
                                      <div className='just_stars'>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                        <img src='/pictures/feedback_start.png' alt="star" className='star'/>
                                      </div>
                                  </div>
                                </div>
                                <img src='/pictures/etc.png' alt="star" className='etc'/>
                            </div>

                            <p className='feedback_text'>До зустрічі, Найт-Сіті</p>
                            <div className='likes_com'>
                                <div className='real_likes_com'>
                                  <div className='likes'>
                                    <img src='/pictures/fed_heart.png' alt="heart"/>
                                    <p>2.5k</p>
                                  </div>
                                  <div className='com'>
                                    <img src='/pictures/fed_com.png' alt="heart"/>
                                    <p>2.5k</p>
                                  </div>
                                </div>
                                <p>21.02.2023</p>
                            </div>
                          </div>
                          
                      </div>
                    </div>
                    <center><img src='/pictures/down3.png' alt="down" className='down_3'/></center>
                </div>
              </div>
          </div>
      </div>
    );
  }
  export default DLC;