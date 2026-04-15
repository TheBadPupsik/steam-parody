import './Main_Picture.css';
import { useState } from 'react';

const pictures = [
  {
    image: 'main_picture.png',
    thumb: 'pic1',
    discount: '40%',
    price_new: '911₴',
    price_old: '1519₴',
    title: 'Avatar: Frontiers of Pandora',
    text: 'Avatar: Frontiers of Pandora™ — це пригодницька гра від першої особи, де події розгортаються на західному кордоні.',
  },
  {
    image: 'pic2.png',
    thumb: 'pic2',
    discount: '45%',
    price_new: '612₴',
    price_old: '1299₴',
    title: 'Red Dead Redemption 2',
    text: 'Red Dead Redemption 2 — це епічний пригодницький екшен у відкритому світі про життя поза законом на Дикому Заході.',
  },
  {
    image: 'barotrauma.jpg',
    thumb: 'pic3',
    discount: '55%',
    price_new: '250₴',
    price_old: '550₴',
    title: 'Barotrauma',
    text: 'Barotrauma — це симулятор підводного човна з елементами виживання та жахів. Події відбуваються на супутника Юпітера',
  },
];

const thumbs = {
  pic1: [
    'Rectangle 431.png',
    'Rectangle 432.png',
    'Rectangle 433.png',
    'Rectangle 434.png',
    'Rectangle 435.png',
    'Rectangle 436.png',
    'Rectangle 437.png',
    'Rectangle 438.png',
    'Rectangle 439.png',
    'Rectangle 440.png',
  ],
  pic2: [
    'pic_1.jpg',
    'pic_2.webp',
    'pic_3.webp',
    'pic_4.jpg',
    'pic_5.avif',
    'pic_6.webp',
    'pic_7.webp',
    'pic_8.jpg',
    'pic_9.avif',
    'pic_10.jpg',
  ],
  pic3: [
    'p1.jpg',
    'p2.jpg',
    'p3.jpg',
    'p4.jpg',
    'p5.webp',
    'p6.jpg',
    'p7.jpg',
    'p8.jpg',
    'p9.webp',
    'p10.webp',
  ],
};

function PictureItem({ image }) {
  return (
    <div className="Main_Picture">
      <img src={`/pictures/${image}`} alt="main" className="Picture" />
    </div>
  );
}

export function Main_Picture() {
  const [index, setIndex] = useState(0);

  const total = pictures.length;
  const currentGame = pictures[index];
  const currentThumbs = thumbs[currentGame.thumb];

  const prev = () => {
    setIndex(i => (i - 1 + total) % total);
  };

  const next = () => {
    setIndex(i => (i + 1) % total);
  };

  return (
    <div>
      <PictureItem image={currentGame.image} />
      <img src="/pictures/left.png" alt="left" className="left" onClick={prev} />
      <img src="/pictures/right.png" alt="right" className="right" onClick={next} />

      <div className="Main_Frame">
        <div className="first_frame">
          <div className="top_row">
            <button>
              <p>{currentGame.discount}</p>
            </button>

            <div className="second_frame">
              <p id="first">{currentGame.price_new}</p>
              <p id="second">{currentGame.price_old}</p>
            </div>
          </div>

          <p id="third">Знижка діє до 24.06.2024 10:00</p>
        </div>

        <div className="third_frame">
          <p id="fourth">{currentGame.title}</p>
          <p id="fiveth">{currentGame.text}</p>
        </div>
      </div>

      <div className="Small_Pictures">
        {currentThumbs.map((img, i) => (
          <img
            key={i}
            src={`/pictures/${currentGame.thumb}/${img}`}
            alt={`thumb-${i}`}
            className="small_img"
            onClick={() => {
              console.log('thumb click', i);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Main_Picture;