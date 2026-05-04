import { CategoryNameBlock } from '../CategoryName/CategoryName';
import { LibraryCardsBlock } from '../LibraryCards/LibraryCards';
import { LibSearch } from '../LibrarySearch/LibrarySearch';
import { SideBar } from '../SideBar/SideBar';
import './LibraryPage.css';

function LibraryPage() {
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
            <img src='./images/create.svg'/>
          </div>
        </div>
      </div>
    </div >
  );
}

export default LibraryPage;
