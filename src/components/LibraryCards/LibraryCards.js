import './LibraryCards.css';

const news = [
  { id: 1,image: './pictures/new1.png', name: 'Fallout 4', name2: "Fallout 4: Оновлення 1.10.40", description: "Виправлено проблеми з некоректним відображенням скріншотів у Creation Club/Mods",},
  { id: 1,image: './pictures/witcher3.png', name: 'The Witcher 3', name2: "Відьмак 3 REDkit вже доступний!", description: "Незабаром ви зможете збагатити свій час у The Witcher 3: Wild Hunt багатьма можливостями. " },
  { id: 1,image: './pictures/lightd.png', name: 'Dying Light ', name2: "Стандартне видання Dying Light ", description: "Стандартне видання Dying Light повертається вчасно для масового розпродажу! " },
];


function LibraryCard({option,image, name, name2, description}) {
  return (
    option == 1 ? 
    <div className='library-card'>
      <img src={image} />
      <div className='library-card-up'>
        <div className='avatar'>
          <img src='/pictures/avatarka.png' alt="ava" />
          <p>{name}</p>
        </div>
        <img src='/pictures/meatballs.svg' alt="meatballs" />
      </div>
      <div className='library-card-mid'>
        <h2>{name2}</h2>
        <p>{description}
        </p>
      </div>
      <div className='library-card-down'>
        <div className='library-card-down-left'>
          <div className='likes'>
            <img src='/pictures/Heart.svg' alt="like" />
            <h5>2.5k</h5>
          </div>
          <div className='comments'>
            <img src='/pictures/Vector.svg' alt="comment" />
            <h5>2.5k</h5>
          </div>
        </div>
        <h4>10.06.2026</h4>
      </div>
    </div>
    : 
    <div className='library-card'>
      <div className='library-card-up'>
        <div className='avatar'>
          <img src='/pictures/avatarka.png' alt="ava" />
          <p>{name}</p>
        </div>
        <img src='/pictures/meatballs.svg' alt="meatballs" />
      </div>
      <img src={image} />
      <div className='library-card-mid'>
        <h2>{name2}</h2>
        <p>{description}
        </p>
      </div>
      <div className='library-card-down'>
        <div className='library-card-down-left'>
          <div className='likes'>
            <img src='/pictures/Heart.svg' alt="like" />
            <h5>2.5k</h5>
          </div>
          <div className='comments'>
            <img src='/pictures/Vector.svg' alt="comment" />
            <h5>2.5k</h5>
          </div>
        </div>
        <h4>10.06.2026</h4>
      </div>
    </div>
  )
}


export function LibraryCardsBlock() {
  return (
    <div className='wrapper-lib'>
      {
        news.map((piece) => (
          <LibraryCard
            key={piece.id}
            {...piece}
          />
        ))
      }
    </div>
  );
}

