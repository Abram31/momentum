/* eslint-disable import/no-cycle */
import { SendRequest } from './_sendRequest';
import { data } from './index';

const blockWeatherCity = document.querySelector('.weather-city');
const iconWeather = document.querySelector('.weather-icon');
const blockTemperatur = document.querySelector('.weather-temperatur');
const blockWindSpeed = document.querySelector('.weather-windspeed');
const blockHumidity = document.querySelector('.weather-humidity');

export const inputCity: any = document.getElementById('id-input-weather');


let city = 'Минск';
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&APPID=a5431f69a9a320c7854afa9b1e12fec4`;

export const requestWeather = new SendRequest(weatherUrl).getRequest('weather');

blockWeatherCity!.innerHTML = '<input id ="id-input-weather" type="text" value="Minsk" placeholder="">';
export const addIconsWeather = () => {
  iconWeather?.classList.add(`owf-${data.weather.weather[0].id}`);
  blockTemperatur!.textContent = `${Math.round(data.weather.main.temp)}°C ${data.weather.weather[0].description}`;
  blockWindSpeed!.textContent = `Wind speed: ${Math.round(data.weather.wind.speed)} m/s`;
  blockHumidity!.textContent = `Humibity: ${data.weather.main.humidity}%`;
};

export function changeCityWeather(event:any) {
  
  if (event.target.id === 'id-input-weather' && event.code == 'Enter' || event.code == 'NumpadEnter') {
    
    city = event.target.value;
    weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&APPID=a5431f69a9a320c7854afa9b1e12fec4`;

    const requestWeatherChange = new SendRequest(weatherUrl).getRequest('weather'); 
    requestWeatherChange.then(() => { console.log(data); addIconsWeather(); });
  }

}

// export const innerNewWeather =()=> {
//     console.log(data);
//     console.log(weatherUrl);

    

// }
