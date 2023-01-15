import './App.css';
import Search from './components/Search.js'
import WeatherData from './components/WeatherData.js'
import {WEATHER_CURRENT_API_KEY, WEATHER_CURRENT_API_URL} from './CityOptions.js'
import {useState} from 'react'

function App() {

  const [weatherData, changeWeatherData] = useState(null);
  const [cityData,changeCityData] = useState(null)

  function changeCityValue (searchValue){
    changeCityData(searchValue)
    const [lat, lon] = searchValue.value.split(' ');
    fetch(`${WEATHER_CURRENT_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_CURRENT_API_KEY}`).then(response=>response.json()).then(response=> changeWeatherData(response)).catch(err=>console.log(err))
  }

  return (
    <>
      <Search changeCityValue={changeCityValue}></Search>
      {weatherData && <WeatherData weatherData={weatherData} cityData={cityData}></WeatherData>}
    </>
  );
}

export default App;
