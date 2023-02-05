import React from 'react'

const WeatherData = ({weatherData, cityData}) => {
    console.log(weatherData);
  return (
    <div className='weather-data'>
      <div className='current-weather'>
        <div className='weather-pic'>
            <img src={"http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"} alt="" />
        </div>
        <div className='current-element'>
            <h1>{cityData.label}</h1>
            <p className='current-data'>{weatherData.weather[0].description}</p>
            <span className='current-data'>Temperature: </span>
            <span className='current-data'>{Math.round(weatherData.main.temp)-273}°C</span>
        </div>
        <div className='current-element'>
            <h2>Description</h2>
        </div>
        <div className='current-element current-data'>
            <span>Feels-Like: </span>
            <span>{Math.round(weatherData.main.feels_like - 273)}°C</span>
        </div>
        <div className='current-element current-data'>
            <span>Wind: </span>
            <span>{weatherData.wind.speed}</span>
        </div>
        <div className='current-element current-data'>
            <span>Humidity: </span>
            <span>{weatherData.main.humidity}</span>
        </div>
        <div className='current-element current-data'>
            <span>Pressure: </span>
            <span>{weatherData.main.pressure}</span>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default WeatherData
