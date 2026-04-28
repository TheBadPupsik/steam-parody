import './LibraryCards.css';

const news = [
  { image: './pictures/new1.png', name: 'Cyberpunk 2077', price: 1099 },
];


function LibraryCard() {
  return (
    <div className='library-card'>
      <img src='/pictures/new1.png' />
      <div>
        <div className='avatar'>
          <img src='/pictures/avatarka.png' alt="ava" />
          <p>Fallout 4</p>
        </div>
      </div>
    </div>
  )
}


export function LibraryCardsBlock() {
  return (
    <div className='wrapper-lib'>
      <LibraryCard />
    </div>
  );
}

