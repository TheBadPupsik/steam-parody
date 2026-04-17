import './Header.css';

export function Header() {
  return (
    <div className='Header'>
      <div className='Head'>

        <img src="./pictures/logo.png" alt="logo" className='Logo'></img>

        <div className='Tabs'>
          <div className='div_point'>
            <p className='Text'>Крамниця</p>
            <img src="./pictures/Ellipse.png" alt="logo" className='Ellipse'></img>
          </div>
          <p className='Text1'>Бібліотека</p>
          <p className='Text2'>Чат</p>
        </div>

        <button className='Secondary_button'><p>Увійти</p></button>
        
      </div>
    </div>
  );
}

export default Header;

