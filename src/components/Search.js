import React,{useState} from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import {options} from '../CityOptions'

const Search = ({changeCityValue}) => {

    const [searchValue, setSearch] = useState(null);

    const changeSearch = (searchValue)=> {
        setSearch(searchValue);
        changeCityValue(searchValue);
    }
    const listCities = (input)=>{
        return fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${input}&minPopulation=1000000`, options)
        .then(response => response.json())
        .then(response => 
            {
                return{
                    options: response.data.map(
                        city=>{
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.countryCode}`, 
                            }
                        }
                    )
                }
            }
            ).catch(err => console.error(err));
    }
  return (
    <AsyncPaginate
    placeholder='Search city'
    debounceTimeout = {600}
    value={searchValue}
    onChange={changeSearch}
    loadOptions={listCities}
    className="search"
    >
    </AsyncPaginate>
  )
}

export default Search
