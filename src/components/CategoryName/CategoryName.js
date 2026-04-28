import './CategoryName.css';

export function CategoryNameBlock({title,text}) {
  return (
    <div className='block-info'>
      <h2>{title}</h2>
      <h3>{text} ›</h3>
    </div>
  )
}