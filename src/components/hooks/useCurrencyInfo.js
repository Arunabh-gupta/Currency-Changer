import axios from "axios"
import { useEffect, useState } from "react"
export const useCurrencyInfo = (currency) =>  {
    const [data, setData] = useState({})

    useEffect(()=>{
        const refetch = async () => {
            try {
                const result = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.5.18/v1/currencies/${currency}.json`)          
                setData(result.data[currency])      
            } catch (error) {
                console.log(error)
            }
        }

        refetch();
    }, [currency])

    return data;    
}