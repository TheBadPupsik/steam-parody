import { CategoryNameBlock } from '../CategoryName/CategoryName';
import { LibraryCardsBlock } from '../LibraryCards/LibraryCards';
import { LibSearch } from '../LibrarySearch/LibrarySearch';
import { SideBar } from '../SideBar/SideBar';
import './LibraryPage.css';
import React, { useState } from 'react';

const pictures = [{ image: './pictures/1.png' }, { image: './pictures/2.png' }, { image: './pictures/3.png' }, { image: './pictures/4.png' },
{ image: './pictures/5.png' }, { image: './pictures/6.png' }, { image: './pictures/7.png' }, { image: './pictures/8.png' }, { image: './pictures/9.png' }, { image: './pictures/10.png' },]

function LibraryPage() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <LibSearch />
      <div className='block-lib'>
        <SideBar />
        <div className='block-lib-right'>
          <CategoryNameBlock title={'Новини'} text={'Усі новини'} />
          <LibraryCardsBlock option={1} />
          <CategoryNameBlock title={'Цікаве від Спільноти'} text={'Моя стрічка'} />
          <LibraryCardsBlock option={2} />
          <div className='headlines'>
            <h2>Усі ігри</h2>
            <h2>Обране</h2>
            <h2>Моя колекція</h2>
            <img src='./images/create.svg' onClick={toggleModal} />
          </div>
          <div className='games-block'>
            {
              pictures.map((picture) => (
                <img src={picture.image} className='games-block-img' alt="game" />
              ))
            }
          </div>
        </div>
        
        {isOpen && (
          <div className='modal-overlay' onClick={toggleModal}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <div className='modal-header'>
                <h2>Нова колекція</h2>
                <span className='close-btn' onClick={toggleModal}>&times;</span>
              </div>

              <div className='modal-body'>
                <div className='input-group'>
                  <label>Назва колекції <span>0/25</span></label>
                  <input type="text" placeholder="Придумайте назву колекції..." />
                </div>

                <div className='input-group'>
                  <label>Додайте ігри</label>
                  <input type="text" placeholder="Пошук ігор за назвою..." />
                </div>

                <h2 className='other-text'>Ви можете додати ігри до колекції пізніше</h2>

                <div className='container-option-block'>
                  <div className='option-block'>
                    <h3>Название игры</h3>
                    <span>&times;</span>
                  </div>
                  <div className='option-block'>
                    <h3>Название игры</h3>
                    <span>&times;</span>
                  </div>
                  <div className='option-block'>
                    <h3>Игра</h3>
                    <span>&times;</span>
                  </div>
                  <div className='option-block'>
                    <h3>Название игры</h3>
                    <span>&times;</span>
                  </div>
                  <div className='option-block'>
                    <h3>Длинное название игры</h3>
                    <span>&times;</span>
                  </div>
                </div>

                <button className='create-btn'>Створити</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  );
}

export default LibraryPage;
