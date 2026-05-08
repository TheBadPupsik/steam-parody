import './delete_accaount.css';

export function Delete_accaount()
{
  return(
    <div>
      <div className='block_delete_accaount'>
        <h2 className='h2_delete_accaount'>
          Видалення акаунта
        </h2>
        <div className='block_warning_delete_accaount'>
        <p className='p_delte_accaount'>
          Натисніть {' '}  
          <span className='p_red_delete_accaount'>видалити мій акаунт</span>,
          щоб розпочати процес остаточного видалення вашого акаунта Brist, 
          включно з усією особистою інформацією та купленим контентом.
          Після видалення вашого акаунта Brist баланс вашого гаманця також буде безповоротно видалено.
        </p>
        </div>
        <div className='text_input_delete_accaount'>
          <b className='b_delete_accaount'>Нікнейм</b>
          <input placeholder='Введіть ваш поточний нікнейм...' className='input_delete_account' type='text'></input>
        </div>
        <div className='text_input_delete_accaount'>
          <b className='b_delete_accaount'>Пароль</b>
          <input placeholder='Введіть ваш поточний пароль...' className='input_delete_account' type='text'></input>
          <input placeholder='Повторіть пароль...' className='input_delete_account' type='text'></input>
        </div>
        <button className='button_delete_accaount'>Видалити мій акаунт</button>
      </div>
    </div>
  )
}

export default Delete_accaount;
