import './GeneralSettings.css';

function GeneralSettings() {
  const countries = ["Україна", "США", "Польща", "Німеччина", "Франція"];
  return (
    <div>
      <div className='block_accaount'>
        <img className='fon' src='/pictures/Frame36768.png' alt='fon' />

        <div className='block_content'>
          <div className='avatar_wrap'>
            <img src='/pictures/Frame 37339.png' alt='avatar' />
          </div>

          <div className='content_text'>
            <div className='nok_email'>
              <div className='blochok'>
                <b>Нікнейм</b>
                <input className='input_general' type='text' placeholder='Enter your nickname' />
              </div>
              <div className='blochok'>
                <b>Ел. пошта</b>
                <input className='input_general' type='email' placeholder='example@gmail.com' />
              </div>
            </div>

            <div className='blochok3'>
              <b>Про себе</b>
              <input className='about' placeholder='Write about yourself' />
            </div>

            <div className='blochok4'>
              <b>Мова сайту</b>
              <select className='country'>
                <option value="" disabled selected>Оберіть мову</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.toLowerCase()}>{country}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className='buttoni'>
          <p className='cancel_text'>Скасувати</p>
          <button className='save_btn'>Зберегти</button>
        </div>
      </div>
    </div>
  );
}

export default GeneralSettings;