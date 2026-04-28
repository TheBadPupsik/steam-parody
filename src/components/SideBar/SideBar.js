import './SideBar.css';

const games = [
  { image: './pictures/bell.png', name: 'Bellwright' },
  { image: './pictures/stard.png', name: 'Stardew Valley'},
  { image: './pictures/ghost.png', name: 'Ghost of Tsushima'},
  { image: './pictures/avatar2.png', name: 'Avatar: Frontiers of Pandora' },
  { image: './pictures/halo.png', name: 'Halo: The Master Chief Collection'},
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


