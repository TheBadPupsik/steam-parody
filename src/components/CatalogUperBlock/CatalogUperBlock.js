import './CatalogUperBlock.css';
import React, { useState } from 'react';

export function ViewBLock({ viewMode, setViewMode }) {

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('За релевантністю');

  const sortOptions = [
    'За релевантністю',
    'Спочатку популярні',
    'Спочатку нові',
    'За оцінкою',
    'Від дешевих до дорогих',
    'Від дорогих до дешевих',
    'А – Я',
    'Я – А'
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className='wrapper-view'>
      <div>
        <div className='block-sort'>
          <h3 className='name'>Сортування:</h3>
          <h3 className='option' onClick={toggleMenu}>{selected}</h3>
          <img
            src='/images/Icons (2).png'
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }}
            alt="arrow"
          />
        </div>

        {isOpen && (
          <div className='sort-dropdown'>
            {sortOptions.map((option) => (
              <div
                key={option}
                className='sort-item'
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='block-view'>
        <h3 className='name'>Вид:</h3>
        <img src='/images/grid.svg'
          className={viewMode === 'grid' ? 'active-icon' : ''}
          onClick={() => setViewMode('grid')}
        />
        <img src='/images/list.svg' 
          className={viewMode === 'list' ? 'active-icon' : ''} 
          onClick={() => setViewMode('list')}
        />
      </div>

      {/* <div className={viewMode === 'grid' ? 'products-grid-container' : 'products-list-container'}>
        {games.map(game => (
          viewMode === 'grid' 
            ? <ProductCardGrid key={game.id} {...game} /> 
            : <ProductCardList key={game.id} {...game} />
        ))}
      </div> */}
    </div>
  )
}
