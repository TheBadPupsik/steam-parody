import './About_Game.css';

export function About_Game()
{
  const images = [
    "/pictures/screenshotes/Rectangle 122.png",
    "/pictures/screenshotes/Rectangle 123.png",
    "/pictures/screenshotes/Rectangle 124.png",
    "/pictures/screenshotes/Rectangle 125.png",
    "/pictures/screenshotes/Rectangle 126.png",
    "/pictures/screenshotes/Rectangle 127.png",
    "/pictures/screenshotes/Rectangle 129.jpg",
    "/pictures/screenshotes/Rectangle 130.webp",
    "/pictures/screenshotes/Rectangle 134.png",
  ];

  return (
    <div className='app'>
      <p className='title'>Cyberpunk 2077</p>
      <img src='/pictures/main_picture_about.png' alt="main" className='main_picture_about' />

      <div className='slider'>
        {images.map((img, index) => (
          <img key={index} src={img} className='slide_img' />
        ))}
      </div>

      <div className="pictures_small">
          <div className='small_div'>шутер</div>
          <div className='small_div'>екшн</div>
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
            <img src='/pictures/main_picture_about.png' alt="picture" className='Main_div_picture' />
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
                    <div className='complects_second'>
                      <div className='first_complect'>
                        <p>Cyberpunk 2077</p>
                        <div className='main_info_card'>
                          <p id='first_p'>Cyberpunk 2077 — пригодницький рольовий екшн у відкритому світі мегаполісу Найт-Сіті, де у ролі кіберпанкового найманця ви боротиметеся за виживання. Гра вдосконалена і має новий безкоштовний вміст. Налаштуйте персонажа й ігровий стиль, виконуючи завдання, нарощуючи репутацію і відкриваючи апгрейди. Будуючи взаємини і здійснюючи вибір, ви формуєте сюжет і світ навколо. Тут народжуються легенди. Якою буде ваша?</p>
                          <p id='second_p'>Вміст:</p>
                          <li>Cyberpunk</li>
                          <li>Крутий контент</li>
                          <li>Дуже корисний контент</li>
                          <li>Якийсь цікавий контент</li>
                        </div>
                        <div className='price_desc'>
                          <p id='put_text'>1 099₴</p>
                          <button><p>У кошик</p></button>
                        </div>
                      </div>
                      <div className='povne_Bidanna'>
                        <p>Cyberpunk: Повне видання</p>
                        <div className='description_povne'>
                          <p id='second_p'>Вміст:</p>
                          <li>Cyberpunk</li>
                          <li>Cyberpunk 2077: Ілюзія свободи</li> 
                        </div>
                        <div className='price_sell'>
                          <div className='sell_buy'></div>
                            <div className='price_'>
                              <div className='red_button'>-8%</div>
                              <div className='old_new_price'>
                                <p id='new_price'>1 516₴</p>
                                <p id='old_price'>1 750₴</p>
                              </div>
                            </div>
                            <p id='sell_p'>Знижка діє до 24.07.2024 10:00</p>
                        </div>
                        <button><p>У кошик</p></button>
                      </div>
                    </div>
                </div>
          
                <div className='Another_DLC'>
                    <div className='first_dlc'>
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
                      <button>Додати в кошик усі DLC</button>
                    </div>
                </div>
            </div>

            <div className='Main_of_second'>
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
  export default About_Game;