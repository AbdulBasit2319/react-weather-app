import React,{useContext} from 'react'
import Context from '../Context'

function WeatherSearch() {

    const {api_call}= useContext(Context);
    // console.log(api_call)
    return (
        <div>
            <div className="weather-search">
                <form onSubmit={api_call} className="weather-search__form">
                    <input name="location" autoComplete="off" className="weather-search__input" type="text" />
                    <div className="weather-search__submit">
                        <button className="weather-search__button">&rarr;</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WeatherSearch
