import React from 'react';
import { NavLink } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar';
import './LibraryGame.css';
import { CategoryNameBlock } from '../CategoryName/CategoryName';

export function LibraryGame() {
  return (
    <div>
      <div className='block-lib'>
        <SideBar />
        <div className='block-lib-right'>
          <div className='game-info' style={{ backgroundImage: `linear-gradient(to top, rgba(0, 20, 31, 0.8), transparent), url('/pictures/game-backround.jpg')` }}>
            <div className='game-info-content-wrapper'>
              <div className='game-info-left'>
                <div className='game-name'>
                  <NavLink to="/library"><img src='/pictures/arrow-down.svg' /></NavLink>
                  <h1>No Man’s Sky</h1>
                </div>
                <div className='game-download'>
                  <button>Скачати</button>
                  <div className='block-download'>
                    <h3>Розмір на диску</h3>
                    <h2>10 ГБ</h2>
                  </div>
                </div>
              </div>
              <div className='game-info-right'>
                <img src='./pictures/star1.png'></img>
                <img src='./pictures/info.png'></img>
                <img src='./pictures/more.png'></img>
              </div>
            </div>
          </div>
          <div className='small-nav'>
            <h3>Сторінка крамниці</h3>
            <h3>DLC</h3>
            <h3>Сторінка розробника</h3>
            <h3>Спільнота</h3>
          </div>
          <div className='game-info-two'>
              <div>
                <h1 className='top-heading'>Моя рецензія</h1>
                <div className='write-block'>
                  <button className='write-block-but'>Написати рецензію</button>
                </div>
                <CategoryNameBlock title={'Що нового'} text={'Усі новини'} />
              </div>
          </div>
        </div>
      </div>
    </div >
  )
}