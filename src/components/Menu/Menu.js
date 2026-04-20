  import './Menu.css';

  export function Menu()
  {
    return (
      <div>
        <div className='block'>
          <div className='zagolovki'>
              <h2>Фільтри</h2>
              <h2 className='zkunyt'>Скинути</h2>
          </div>
          <input placeholder='Пошук тегів...'></input>
          {/* <img className='krestik' src='/images/Icons (1).png'></img>  */}
          <div className='second-input'>
            <b>Жанр</b>
            <img src='/images/Icons (2).png'></img>
          </div>
          <div className='price'>
            <div className='verx'>
            <b>Ціна</b>
            <img className='galochka' src='/images/Icons (3).png'></img>
            </div>
            <div className='price-list-container'>
            <div className='price-list'>
              <div className='circle'/>
            <p>Безкоштовно</p>
            </div>
                        <div className='price-list'>
              <div className='circle'/>
            <p>До 100 гривень</p>
            </div>
                        <div className='price-list'>
              <div className='circle'/>
            <p>До 300 гривень</p>
            </div>
                        <div className='price-list'>
              <div className='circle'/>
            <p>До 600 гривень</p>
            </div>
                        <div className='price-list'>
              <div className='circle'/>
            <p>До 900 гривень</p>
            </div>
                        <div className='price-list'>
              <div className='circle'/>
            <p>Безкоштовно</p>  
            </div>
              <center><div className='linia'></div></center>
              <div className='price-list1'>
          <div className='kvadrat'></div>
          <p>Знижки</p>
          </div>
           </div>
          </div>
                    <div className='second-input'>
            <b>Тип</b>
            <img src='/images/Icons (2).png'></img>
          </div>
                    <div className='second-input'>
            <b>Особливосі</b>
            <img src='/images/Icons (2).png'></img>
          </div>
                    <div className='second-input'>
            <b>Платформа</b>
            <img src='/images/Icons (2).png'></img>
          </div>
                    <div className='second-input'>
            <b>Івенти</b>
            <img src='/images/Icons (2).png'></img>
          </div>
        </div>
      </div>  
    );

  }

  export default Menu;
