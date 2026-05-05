import './LibrarySearch.css';

export function LibSearch({ viewMode, setViewMode }) {
  return (
    <div className='SearchPanel-lib'>

      <div className='left-panel'>
        <div className="Panel-lib">
          <input type="text" placeholder="Пошук у Крамниці..." className="SearchInput-lib" />
          <img src='Icons.svg' alt='Icon' className="SearchIcon-lib" />
        </div>

        <div className='filter-lib'>
          <img src='/images/filter.svg' alt='filter' />
          <h2>Фільтри</h2>
        </div>
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

    </div>
  );
}
