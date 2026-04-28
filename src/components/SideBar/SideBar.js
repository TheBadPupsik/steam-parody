import './SideBar.css';

const games = [
  { image: './pictures/fallout.png', name: 'Fallout 4' },
  { image: './pictures/2077.png', name: 'Cyberpunk 2077'},
  { image: './pictures/legacy.png', name: 'Hogwarts Legacy'},
  { image: './pictures/eldenr.png', name: 'ELDEN RING' },
  { image: './pictures/black.png', name: 'Black Desert'},
  { image: './pictures/world.png', name: 'Monster Hunter: World'},
  { image: './pictures/forest.png', name: 'Sons Of The Forest'},
];

export function SideBar() {
  return (
    <div className="side-bar">
      <div className="up-block">
        <h1>Усі ігри</h1>
        <img src='/images/filter.svg' alt='filter' />
      </div>
      <div className='library-games-wrapper'>
        {games.map((game) => (
          <div
            className='bar-item'
          >
          <img src={game.image} alt={game.name}/>
          <h2>{game.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}


