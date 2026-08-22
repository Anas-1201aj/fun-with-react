import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})     //if feetch is not called than app will not crash
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())     //converting the response into json
        .then((res)=>setData( res[currency]))   //storing the response when ever there is a change in the currency
    },[currency])
    return data;
} 
export default useCurrencyInfo;