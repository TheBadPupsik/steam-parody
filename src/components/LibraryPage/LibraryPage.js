import { CategoryNameBlock } from '../CategoryName/CategoryName';
import { LibraryCardsBlock } from '../LibraryCards/LibraryCards';
import { LibSearch } from '../LibrarySearch/LibrarySearch';
import { SideBar } from '../SideBar/SideBar';
import './LibraryPage.css';

const pictures = [{ image: './pictures/1.png' }, { image: './pictures/2.png' }, { image: './pictures/3.png' }, { image: './pictures/4.png' },
{ image: './pictures/5.png' }, { image: './pictures/6.png' }, { image: './pictures/7.png' }, { image: './pictures/8.png' }, { image: './pictures/9.png' },{ image: './pictures/10.png' },]

function LibraryPage() {

  const [isOpen, setIsOpen] = useState(false);

  function addBlock() {
    setIsOpen(true)
  }

  return (
    <div>
      <LibSearch />
      <div className='block-lib'>
        <SideBar />
        <div className='block-lib-right'>
          <CategoryNameBlock title={'Новини'} text={'Усі новини'} />
          <LibraryCardsBlock option={1} />
          <CategoryNameBlock title={'Цікаве від Спільноти'} text={'Моя стрічка'} />
          <LibraryCardsBlock option={2} />
          <div className='headlines'>
            <h2>Усі ігри</h2>
            <h2>Обране</h2>
            <h2>Моя колекція</h2>
            <img src='./images/create.svg' onClick={addBlock}/>
          </div>
          <div className='games-block'>
              {
                pictures.map((picture) => (
                  <img src={picture.image} className='games-block-img' alt="game"/>
                ))
              }
          </div>
        </div>
      </div>
    </div >
  );
}

export default LibraryPage;
