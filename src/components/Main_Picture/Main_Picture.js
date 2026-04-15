import './Main_Picture.css';

export function Main_Picture() {  
  return (
    <div className='Main_Picture'>
        <img src="./pictures/main_picture.png" alt="logo" className='Picture'></img>
        <div className='Main_Frame'>
            <div className='first_frame'>
                <button><p>-40%</p></button>
                <div className='second_frame'>
                  <p id='first'>911₴</p>
                  <p id='second'>1519₴</p>
                </div>
            </div>
        </div>
    </div>
  );
}