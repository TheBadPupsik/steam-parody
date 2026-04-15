import './Footer.css';

export function Footer() {  
  return (
    <div className='Footer'>
      <img src="./pictures/logo.png" alt="logo" className='Logo2'></img>
      <div className='Icons'>
        <img src="./pictures/facebook.png" alt="facebook" className='Logo_3'></img>
        <img src="./pictures/instagram.png" alt="instagram" className='Logo_3'></img>
        <img src="./pictures/twitter.png" alt="twitter" className='Logo_3'></img>
      </div>
      <p className='text'>© 2024, Zubarik inc, Inc. All rights reserved. Zubarik inc, Zubarik inc, the Zubarik inc logo, Zubarik, the Zubarik logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Zubarik inc, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.</p>
      <div className='text_name'>
        <p>Умови використання</p>
        <p>Політика конфіденційності</p>
        <p>Політика повернення коштів магазину</p>
      </div>
    </div>
  );
}

export default Footer;
