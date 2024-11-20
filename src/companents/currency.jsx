import React, { useState } from 'react'
import '../css/currency.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_N1PonmH5kYUY0VyeUyt6CIvxP4872fwFrrcFu3XB";


function currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const exchange = async () => {
        // console.log(amount);
        // console.log(fromCurrency);
        // console.log(toCurrency)
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&bascurrency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }
    return (

        <div className='currency-div'>
            <div className='text'>
                <h3 >Döviz Kuru Uygulaması</h3>
            </div>
            <div>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type='number' className='amount'></input>
                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option>UDS</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaLongArrowAltRight className='icon' />
                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input
                    value={result} onChange={(e) => setResult(e.target.value)}
                    type='number' className='amout2'></input>

            </div>
            <div>
                <button
                    onClick={exchange}
                    className='button'>Çevir</button>
            </div>
        </div>
    )
}

export default currency