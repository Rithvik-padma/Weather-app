import React from 'react'

const WeatherData = ({weatherData, cityData}) => {
    console.log(weatherData);
  return (
    <div>
      <div>
        <div>
            <img src={"http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"} alt="" />
        </div>
        <div>
            <h1>{cityData.label}</h1>
            <p>{weatherData.weather[0].description}</p>
        </div>
        <div>
            <h1></h1>
        </div>
        <div>
            <span>Feels Like :</span>
            <span>{Math.round(weatherData.main.feels_like - 273)}</span>
        </div>
        <div>
            <span>Wind :</span>
            <span></span>
        </div>
        <div>
            <span>Humidity :</span>
            <span></span>
        </div>
        <div>
            <span>Presuure :</span>
            <span></span>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default WeatherData
