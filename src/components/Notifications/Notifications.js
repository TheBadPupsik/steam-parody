import './Notifications.css';

export function Notifications() {
  return (
    <div>
      <div className='block_notification'>
        <h2 className='zagolovok_notification'>Беззвучні сповіщення</h2>
        
        <div className='txt_button'>
          <p className='p_notification'>Великий розпродаж</p>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>
        </div>

        <div className='txt_button'>
          <p className='p_notification'>Знижка на ігри з мого Бажаного</p>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>
        </div>

        <div className='txt_button'>
          <p className='p_notification'>Новий коментар під моїм профілем</p>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>
        </div>

        <div className='txt_button'>
          <p className='p_notification'>Новий запит на дружбу</p>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>
        </div>

        <div className='txt_button'>
          <p className='p_notification'>Мій запит на дружбу прийнято</p>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>
        </div>

        <div className='txt_button'>
          <p className='p_notification'>Мій запит на дружбу відхилено</p>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>
        </div>

        <h2 className='zagolovok_notification'>Чат</h2>
        
        <div className='txt_button3'>
          <p className='p_notification'>Нове повідомлення у чаті</p>   
          <div className='txt_button2'>
            <div className='button_text_notifications'>
              <h3 className='h3_notofications'>Сповіщення</h3>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider"></span>
              </label>
            </div>
            <div className='button_text_notifications'>
              <h3 className='h3_notofications'>Звук</h3>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider"></span>
              </label>
            </div>
          </div> 
        </div>      
      </div>
    </div>
  );
}

export default Notifications;