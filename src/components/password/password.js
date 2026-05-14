import './password.css';
import { useState } from 'react';

export function Password()
{
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();

  if (password.length < 7) {
    setError('Мінімум 7 символів');
  }
  else {
    setError('');
    alert('Успішно');
  }
};
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
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
        <input pattern='[^\s]{7,}' required className='input2' type='text' placeholder='Введіть поточний пароль'  value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className='input_zagolovok'>
        <p>Новий пароль</p>
        <div className='input_zagolovok2'>
        <input pattern='[^\s]{7,}' required className='input2' type='text' placeholder='Введіть новий пароль' value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
              {error && <p className='error'>{error}</p>}
        <input pattern='[^\s]{7,}' required className='input2' type='text' placeholder='Введіть новий пароль' value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
              {error && <p className='error'>{error}</p>}

        </div>
        </div>
        <button onClick={handleSubmit}>Збрегти</button>        
      </div>
      </form>
    </div>
  )
}

export default Password;
