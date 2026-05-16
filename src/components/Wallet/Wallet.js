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
        <center><h2 className='h2_wallet_transaction'>Історія транзакцій</h2></center>
      <div className='block_history_transaction'> 
        <div className='block_transaction'>
          <div className='sum_name_transaction'>
            <p className='p_wallet_transaction_opis'>Сума</p>
            <p className='p_wallet_transaction_opis'>Найменування</p>
          </div>
          <p className='p_wallet_transaction_opis'>Дата</p>
        </div>
        <div className='transactions_wallet_sum_and_date'>
        <div className='block_transaction2'>
          <div className='sum_name_transaction'>
            <p className='p_wallet_transaction_opis'>-1000₴</p>
            <p className='p_wallet_transaction_opis'>Якась гра, яка дуже всім сподобається</p>
          </div>
          <p className='p_wallet_transaction_opis'>02.02.2023</p>
        </div>
        <div className='block_transaction2'>
          <div className='sum_name_transaction'>
            <p className='p_wallet_transaction_opis'>+1000.50₴</p>
            <p className='p_wallet_transaction_opis'>Поповнення балансу</p>
          </div>
          <p className='p_wallet_transaction_opis'>02.02.2023</p>
        </div>
        <div className='block_transaction2'>
          <div className='sum_name_transaction'>
            <p className='p_wallet_transaction_opis'>+100.50₴</p>
            <p className='p_wallet_transaction_opis'>Поповнення балансу</p>
          </div>
          <p className='p_wallet_transaction_opis'>02.02.2023</p>
        </div>
        <div className='block_transaction2'>
          <div className='sum_name_transaction'>
            <p className='p_wallet_transaction_opis'>+100.50₴</p>
            <p className='p_wallet_transaction_opis'>Поповнення балансу</p>
          </div>
          <p className='p_wallet_transaction_opis'>02.02.2023</p>
        </div>
        <div className='block_transaction2'>
          <div className='sum_name_transaction'>
            <p className='p_wallet_transaction_opis'>+100.50₴</p>
            <p className='p_wallet_transaction_opis'>Поповнення балансу</p>
          </div>
          <p className='p_wallet_transaction_opis'>02.02.2023</p>
        </div>
        <div className='block_transaction2'>
          <div className='sum_name_transaction'>
            <p className='p_wallet_transaction_opis'>+100.50₴</p>
            <p className='p_wallet_transaction_opis'>Поповнення балансу</p>
          </div>
          <p className='p_wallet_transaction_opis'>02.02.2023</p>
        </div>
        <div className='block_transaction2'>
          <div className='sum_name_transaction'>
            <p className='p_wallet_transaction_opis'>+100.50₴</p>
            <p className='p_wallet_transaction_opis'>Поповнення балансу</p>
          </div>
          <p className='p_wallet_transaction_opis'>02.02.2023</p>
        </div>
        <div className='block_transaction2'>
          <div className='sum_name_transaction'>
            <p className='p_wallet_transaction_opis'>+100.50₴</p>
            <p className='p_wallet_transaction_opis'>Поповнення балансу</p>
          </div>
          <p className='p_wallet_transaction_opis'>02.02.2023</p>
        </div>
        </div>
        </div>
      </div>
  )
}
export default Wallet;
