import './Characteristics.css';
import { useState } from "react";

export function Characteristics()
{
    const systemsData = {
    windows: {
      name: "Windows",
      min: {
        os: "64-bit Windows 10",
        cpu: "Core i7-6700 or Ryzen 5 1600",
        memory: "12 GB",
        gpu: "GTX 1060 / RX 580 / Arc A380",
        directx: "12",
        storage: "70 GB",
        sound: "Windows Compatible Audio Device",
        controller: "Keyboard, Gamepad",
        notes: "SSD required",
      },
      rec: {
        os: "64-bit Windows 10",
        cpu: "Core i7-12700 or Ryzen 7 7800X3D",
        memory: "16 GB",
        gpu: "RTX 2060 SUPER / RX 5700 XT / Arc A770",
        directx: "12",
        storage: "70 GB",
        sound: "Windows Compatible Audio Device",
      }
    },

    linux: {
      name: "Linux",
      min: {
        os: "Ubuntu 20.04 / SteamOS",
        cpu: "Ryzen 5 1600",
        memory: "12 GB",
        gpu: "RX 580 / GTX 1060 (Proton)",
        directx: "Vulkan",
        storage: "70 GB",
        sound: "ALSA compatible",
        controller: "Keyboard, Gamepad",
        notes: "SSD + Proton required",
      },
      rec: {
        os: "Ubuntu 22.04",
        cpu: "Ryzen 7 5800X",
        memory: "16 GB",
        gpu: "RX 6700 XT / RTX 3060",
        directx: "Vulkan",
        storage: "70 GB",
        sound: "ALSA compatible",
      }
    }
  };
  
  const [system, setSystem] = useState("windows");
  const [open, setOpen] = useState(false);

  const data = systemsData[system];

  return(
    <div className='app'>
        <p className='text_of_game'>Cyberpunk 2077</p>
        <div className='windows_choice' onClick={() => setOpen(!open)}>
          
      <div className='text_windows'>
        <img  src={system === "windows" ? '/pictures/windows.png' : '/pictures/linux.png'}  alt="os" className={system === "linux" ? "linux_selected" : ""} />
        <p>{system === "windows" ? "Windows" : "Linux"}</p>
      </div>

      <img src='/pictures/down2.png'  alt="down"  className={open ? "arrow open" : "arrow"} />

      {open && (
        <div className='dropdown_menu'>
          <div onClick={() => { setSystem("windows"); setOpen(false); }}>
            <img src='/pictures/windows.png' alt="windows"/>
            <p className='choise_my'>Windows</p>
          </div>

          <div onClick={() => { setSystem("linux"); setOpen(false); }}>
            <img src='/pictures/linux.png' alt="linux" className='linux'/>
            <p className='choise_my'>Linux</p>
          </div>
        </div>
      )}
    </div>

        <p id='min_s'>Мінімальні налаштування</p>
        <p id='rec_s'>Рекомендовані налаштування</p>

        <div className='minimum_settings'>
            <p className='version'>Версія системи:</p>
            <p className='version_text'>{data.min.os}</p>
            <p className='CPU'>CPU:</p>
            <p className='CPU_text'>{data.min.cpu}</p>
            <p className='Memory'>Пам’ять:</p>
            <p className='Memory_text'>{data.min.memory}</p>
            <p className='GPU'>GPU:</p>
            <p className='GPU_text'>{data.min.gpu}</p>
            <p className='DirectX'>DirectX:</p>
            <p className='DirectX_text'>{data.min.directx}</p>
            <p className='Remember'>Обсяг пам’яті:</p>
            <p className='Remember_text'>{data.min.storage}</p>
            <p className='Sound'>Звукова карта:</p>
            <p className='Sound_text'>{data.min.sound}</p>
            <p className='Controller'>Контроллер:</p>
            <p className='Controller_text'>{data.min.controller}</p>
            <p className='Add'>Додаткові примітки:</p>
            <p className='Add_text'>{data.min.notes}</p>
            <p className='Language'>Мова:</p>
            <p className='Language_text'>Звук: Англійська, Українська, Французька, Італійська, тощо</p>
            <p className='Language_text2'>Текст: Англійська, Українська, Французька, Італійська, тощо:</p>
        </div>
        <div className='rec_settings'>
            <p className='version'>Версія системи:</p>
            <p className='version_text'>{data.rec.os}</p>
            <p className='CPU'>CPU:</p>
            <p className='CPU_text'>{data.rec.cpu}</p>
            <p className='Memory'>Пам’ять:</p>
            <p className='Memory_text'>{data.rec.memory}</p>
            <p className='GPU'>GPU:</p>
            <p className='GPU_text'>{data.rec.gpu}</p>
            <p className='DirectX'>DirectX:</p>
            <p className='DirectX_text'>{data.rec.directx}</p>
            <p className='Remember'>Обсяг пам’яті:</p>
            <p className='Remember_text'>{data.rec.storage}</p>
            <p className='Sound'>Звукова карта:</p>
            <p className='Sound_text'>{data.rec.sound}</p>
        </div>

        <div className='title_68'>
          <p>5.0</p>
          <div className='stars_second'>
            <img src='/pictures/star.png' alt="star" className='star'/>
            <img src='/pictures/star.png' alt="star" className='star'/>
            <img src='/pictures/star.png' alt="star" className='star'/>
            <img src='/pictures/star.png' alt="star" className='star'/>
            <img src='/pictures/star.png' alt="star" className='star'/>
          </div>
        </div>

          <div className='Main_Div'>
          <div className='Main_Div_First'>
            <img src='/pictures/main_picture_about.png' alt="picture" className='Main_div_picture' />
            <p className='Main_div_text'>1 099₴</p>
              <div className='buttons_div'>
                <button className='first_b'>
                <p>Купити</p>
                </button>
                
                <div className='buttons_div_second'>
                  <button className='third_b'><p>Додати у кошик</p></button>
                  <button className='fourth_b'><img src='/pictures/heart.png' alt="heart"/></button>
                </div>

                <div className='repost_report'>
                  <div className='repost'>
                    <img src='/pictures/repost.png' alt="repost"/>
                    <p>Репост</p>
                  </div>

                  <div className='report'>
                    <img src='/pictures/report.png' alt="repost"/>
                    <p>Поскаржитись</p>
                  </div>
                </div>
              </div>

              <div className='description_of_game'>
                <div className='first_des'>
                  <p className='first_d_f'>Дата виходу</p>
                  <p className='first_d_d'>10.12.2020</p>
                </div>
                <div className='first_des'>
                  <p className='first_d_f'>Розробник</p>
                  <p className='first_d_d'>CD PROJEKT RED</p>
                </div>
                <div className='first_des'>
                  <p className='first_d_f'>Видавець</p>
                  <p className='first_d_d'>Zubarik Inc</p>
                </div>
                <div className='first_des'>
                  <p className='first_d_f'>Платформи</p>
                  <div className='pictures_descr'>
                    <img src='/pictures/windows.png' alt="windows"/>
                    <img src='/pictures/mac.png' alt="mac"/>
                  </div>
                </div>
              </div>
          </div>
          <div className='Main_Div_Second'>
            <div className='div_second_first'>
              <p className='just_text'>Друзів бажають цю гру: 2</p>
                <div className='avatars_w'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>GhostRogue</p>
                    </div>
                </div>
                <div className='avatars_w'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>sanya_KAL</p>
                    </div>
                </div>
            </div>
            <div className='div_second_second'>
              <p className='just_text'>Друзів мають цю гру: 11</p>
                <div className='avatars_div'>
                   <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>karl_vava</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>zuzeyka</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>NikaNii</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>s1imerock</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>whysxugly</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>low_owl</p>
                    </div>
                </div>
                <div className='avatars_f'>
                    <div className='avatar_1'>
                      <img src='/pictures/avatarka.png' alt="ava"/>
                      <p>mop_riderEX</p>
                    </div>
                </div>
                <div className='plus_five'>
                  <p>+5</p>
                </div>
                </div>
            </div>
          </div>
        </div>
    </div> 
  )
}
export default Characteristics;