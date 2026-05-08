import './password.css';
export function Password()
{
  return(
    <div>
      <div className='block_content2'>
        <center><h2>Зміна Паролю</h2></center>
        <div className='punkti'>
          <ul>
            <div className='punkti_content'>
              <div className='circle'></div>
            <li>Не використовуйте жодного з останніх 5 паролів</li>
            </div>
            <div className='punkti_content'>
              <div className='circle'></div>              
            <li>Використовуйте 7+ символів</li>
            </div>
            <div className='punkti_content'>
              <div className='circle'></div>
            <li>Використовуйте принаймні 1 літеру</li>
            </div>
            <div className='punkti_content'>
              <div className='circle'></div>
            <li>Використовуйте принаймні 1 цифру</li>
            </div>
            <div className='punkti_content'>
              <div className='circle'></div>
            <li>Без пробілів</li>
            </div>
          </ul>
        </div>
        <div className='input_zagolovok'>
        <p>Старий Пароль</p>
        <input className='input2' type='text' placeholder='Введіть поточний пароль'></input>
        </div>
        <div className='input_zagolovok'>
        <p>Новий пароль</p>
        <div className='input_zagolovok2'>
        <input className='input2' type='text' placeholder='Введіть новий пароль'></input>
        <input className='input2' type='text' placeholder='Введіть новий пароль'></input>
        </div>
        </div>
        <button>Збрегти</button>        
      </div>
    </div>
  )
}

export default Password;
