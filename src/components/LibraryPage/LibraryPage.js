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
          <LibraryCardsBlock option={1} />
        </div>
      </div>
    </div >
  );
}

export default LibraryPage;
