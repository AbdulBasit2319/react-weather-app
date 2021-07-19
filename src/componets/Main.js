import React ,{useEffect} from 'react'
import Header from './Header'
import axios from 'axios';

const API_KEY="46fedfa17fb0595cf79ef6359ca3eb0e";

const Main = () => {
const api_call = async () => {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=Pakistan&units=&appid=${API_KEY}`
    const request = axios.get(url);
    const response = await request;
    console.log(response);
}
useEffect(()=>{
    api_call();
},[])

    return (
        <div className="main">
            <Header/>
        </div>
    )
}

export default Main
