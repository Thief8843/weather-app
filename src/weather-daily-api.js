import {timeConverter} from './date';
export function weatherDailyApi(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={current,minutely,hourly,alerts}&appid=f02b5228bfd2a87d37136143d39504ef`
  )
    .then((response) => response.json())
    .then((data) => {
      const week = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ];
      const main = document.querySelector('main');
      const div = document.querySelector('.second-container');
      div.classList.add('second-container');
      const test = [];
      const iconUrl = [];
      const icon = [];
      const celsius = [];
      const time = [];
      console.log(data);
      for (let i = 0; i < data.daily.length-1; i++) {
        icon[i] = data.daily[i].weather[0].icon;
        iconUrl[i] = 'http://openweathermap.org/img/w/' + icon[i] + '.png';
        celsius[i] = Math.round(data.daily[i].temp.day - 273.15);
        time[i] = data.daily[i].dt;
        test[i] = `<div class='daily-weather'>
          <div class="location">
          <h1>${timeConverter(time[i])}</h1>
          <img class="weather-icon" src=${iconUrl[i]}>
        </div>
        <div class="temperature">
          <h2 class="temperature-degree" >${celsius[i]}</h2>
          <div class="temperature-description" data-description-value>${data.daily[i].weather[0].description}</div>
        </div>
          </div>`;
          
      }
      div.innerHTML = test.join("");
      main.appendChild(div);
    })
    .catch((error) => {
      alert('Nu stiu frate!');
    });
}
