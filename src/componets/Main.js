import React, { useState } from 'react'
import Header from './Header'
import Content from './Content';
import axios from 'axios';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
import Context from '../Context';
import Error from './Error';
import DateTime from './DateTime';
import Tagline from './Tagline';


const Main = () => {
  const [weather, setWeather] = useState()
  const [city, setCity] = useState()
  const [error, setError] = useState()
  const api_call = async e => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    if (!location) return setError("Please Enter the City Name"), setWeather(null)
    else { setError(null) }
    const API_KEY = "46fedfa17fb0595cf79ef6359ca3eb0e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    const request = axios.get(url);
    const response = await request;
    // console.log(response);
    setWeather(response.data.main)
    setCity(response.data.name)
  }
  // console.log(weather);


  return (
    <div className="main">
      <Header />
      <Content>
        <Tagline />
        <DateTime />

        <Context.Provider value={{ api_call, weather, city }}>
          <WeatherSearch />
          {error && <Error error={error} />}
          {weather && <WeatherData />}
        </Context.Provider>
      </Content>
    </div>
  )
}

export default Main
