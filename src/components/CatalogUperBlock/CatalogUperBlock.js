import './CatalogUperBlock.css';
import React, { useState } from 'react';

export function ViewBLock() {

  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className='wrapper-view'>
      <div>
        <div className='block-sort'>
          <h3 className='name'>Сортування:</h3>
          <h3 className='option' onClick={toggleMenu}>За релевантністю</h3>
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
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='block-view'>
        <h3 className='name'>Вид:</h3>
        <img src='/images/grid.svg'/>
        <img src='/images/list.svg'/>
      </div>
    </div>
  )
}
