import React from 'react'

function InputBox({
    label,
    amount,
    onCurrencyChange,
    onAmountChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisabled = false, 
    currencyDisabled = false,
    className=""
}) {
  return (
    <div className='InputBox'>
        <div className="Amount">
            <label>{label}</label>
            <input 
            type="number"
            placeholder={amount}
            disabled={amountDisabled}
            value={amount}
            onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
            />
        </div>
        <div className="CurrencyList">
            <p>Currency Type</p>
            <select
            value={selectedCurrency}
            onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
            disabled={currencyDisabled}
            >
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox