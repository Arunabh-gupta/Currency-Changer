import { useState } from 'react'
import './App.css'
import {useCurrencyInfo} from './components/hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
function App() {
  const [toCurrency, setToCurrency] = useState('inr')
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const options = Object.keys(currencyInfo)
  const conversion = () => {
    setconvertedAmount(amount * currencyInfo[toCurrency]);
  }

  const swap = () => {
    setToCurrency(fromCurrency)
    setFromCurrency(toCurrency)
    setAmount(convertedAmount)
    setconvertedAmount(amount)
  }
  
  return (
    <div className="App">

      <h1 className="currency-changer">CURRENCY CHANGER</h1>

      <form onSubmit={(e)=>{
        e.preventDefault()
        conversion()
      }}>
        <div className="InputBox1">
          <InputBox 
          label={"From"} 
          amount={amount}
          selectedCurrency={fromCurrency}
          currencyOptions={options}
          onAmountChange={(amount)=>{setAmount(amount)}}
          onCurrencyChange={(currency)=>{setFromCurrency(currency)}}
          />
        </div>
        <button onClick={swap} className='swap'>SWAP</button>
        <div className="InputBox2">
          <InputBox 
          label={"To"} 
          amount={convertedAmount}
          selectedCurrency={toCurrency}
          currencyOptions={options}
          onAmountChange={(amount)=>{setAmount(amount)}}
          onCurrencyChange={(currency)=>{setToCurrency(currency)}}
          amountDisabled={true}
          />
        </div>
      </form>
      <button onClick={conversion} className='convert'>Convert {fromCurrency.toLocaleUpperCase()} to {toCurrency.toLocaleUpperCase()}</button>
    </div>
  )
}


export default App
