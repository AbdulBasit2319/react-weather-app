import React, { useState } from 'react'
import Header from './Header'
import Content from './Content';
import axios from 'axios';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
import Context from '../Context';


const Main = () => {
    const[weather, setWeather]=useState()
    const api_call = async e => {
        e.preventDefault();
        const API_KEY = "46fedfa17fb0595cf79ef6359ca3eb0e";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Pakistan&units=metric&appid=${API_KEY}`
        const request = axios.get(url);
        const response = await request;
        // console.log(response);
        setWeather(response.data.main)
    }
    // console.log(weather);
    

    return (
        <div className="main">
            <Header />
            <Content>
               <Context.Provider value={{ api_call, weather }}>
               <WeatherSearch />
                {weather && <WeatherData/> }
               </Context.Provider>
            </Content>
        </div>
    )
}

export default Main
