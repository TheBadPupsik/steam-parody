import './BlockCategories.css';

export function CategoriesBlock() {
  return (
    <div className='wrapper-categories'>
      <div className='block-info-small'>
        <h2>Хіти продажу</h2>
        <h3>›</h3>
      </div>
      <div className='block-info-small'>
        <h2>Нові релізи</h2>
        <h3>›</h3>
      </div>
      <div className='block-info-small'>
        <h2>Безкоштовні</h2>
        <h3>›</h3>
      </div>
    </div>
  )
}
