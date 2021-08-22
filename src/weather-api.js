import { weatherDailyApi } from './weather-daily-api';

export function weatherApi(input) {
  
  const div = document.querySelector('.main-container');

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=+${input}+&appid=f02b5228bfd2a87d37136143d39504ef`
  )
    .then((response) => response.json())
    .then((data) => {
      const locationValue = data['name'];
      const tempValue = data['main']['temp'];
      const descValue = data['weather'][0]['description'];
      const icon = data['weather'][0]['icon'];
      const celsius = Math.round(tempValue-273.15);
      const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';
      
      
      div.innerHTML = `<div class="location">
      <h1 class="location-timezone" data-location-value>${locationValue}</h1>
      <img class="weather-icon" src=${iconUrl}>
    </div>
    <div class="temperature">
      <button type="button" class="conversion-temperature"  data-conversion-button="celsius">F</button>
      <h2 class="temperature-degree" >${celsius}</h2>
      <div class="temperature-description" data-description-value>${descValue}</div>
    </div>`

      const lat = data['coord']['lat'];
      const lon = data['coord']['lon'];

      weatherDailyApi(lat, lon);
    })
    .catch((err) => alert('Wrong city name!'));
}
