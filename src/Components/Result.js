import React from 'react'
import { useContext } from 'react'
import {Context} from '../Context'


function Result() {
let [query, setQuery] = useContext(Context);

    /*let dt = query.dt;
let date = new Date(dt*1000);
let hours = date.getHours();
let minutes = '0' + date.getMinutes();
let seconds = '0' + date.getSeconds();
let formattedTime = hours+':'+minutes.substr(-2)+':'+seconds.substr(-2);*/
let plus_sign;



    if (Object.entries(query).length === 0) // check if query is an empty object
        return (
            <div className = 'ResultContainer'>
                <h1 style={{ color: 'white', textAlign: 'center' }}></h1>
            </div>
        )
    else {
        if (query.cod === '404' || query.cod === '400') {
            return (
                <div className = 'ResultContainer'>
                    <h1 style={{ color: 'white', textAlign: 'center' }}>Invalid location name</h1>
                </div>
            )
        } else {
            if(query.timezone/3600 > 0){
                plus_sign = '+'
            }else{
                plus_sign = '';
            }

            return (
                <div className = 'ResultContainer'>
                    <h1 style={{ color: 'white', textAlign: 'center' }}> {query.name}, {query.sys.country} (UTC{plus_sign}{query.timezone/3600})</h1>
                    <h2 style={{ color: 'white', textAlign: 'center' }}>Weather: {query.weather[0].description.charAt(0).toUpperCase() + query.weather[0].description.slice(1)}</h2>
                    <h2 style={{ color: 'white', textAlign: 'center' }}>Wind speed: {query.wind.speed} m/s | {(query.wind.speed*2.236).toFixed(2)} mph </h2>
                    <h2 style={{ color: 'white', textAlign: 'center' }}> Temperature:   {(query.main.temp-273.15).toFixed(2)} &#176;C | {((query.main.temp -273.15)*9/5 + 32).toFixed(2)} &#176;F </h2>
                </div>
            )
        }
    }
}

export default Result