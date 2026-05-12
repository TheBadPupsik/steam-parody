import './Wallet.css';

export function Wallet()
{
  return(
    <div>
     <div className='block_wallet_general'>
      <div className='block_wallet'>
        <img src='/pictures/iconoir_wallet.png'></img>
        <div className='wallet_blochik_cost'>
        <b className='b_wallet'>Мій баланс</b>
        <h2>1000.50₴</h2>
        </div>
      </div>
        <b className='wallet_b'>Поповнення балансу</b>
      <div className='wallet_input_button'>
        <input type='text' className='input_wallet' placeholder='Сума'></input>
        <button className='pay_wallet'>Поповнити</button>
      </div>
      </div>
      <div className='block_history_transaction'>
        <h2>Історія транзакцій</h2>
        <div className='block_wallet_general_transaction'>
        <div className='block_wallet_transaction'>
          <div className='p_wallet_transaction'>
          <p>Сума</p>
          <p>Найменування</p>
          </div>
          <p>Дата</p>
        </div>
        <div className='transaction_wallet'>
          <div className=''></div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Wallet;
