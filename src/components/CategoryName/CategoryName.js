import './CategoryName.css';

export function CategoryNameBlock({title}) {
  return (
    <div className='block-info'>
      <h2>{title}</h2>
      <h3>Дивитись більше ›</h3>
    </div>
  )
}