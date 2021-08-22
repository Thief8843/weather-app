import { weatherApi } from './weather-api';
import { switchMeasurement } from './switch-measurements';

weatherApi('Botosani');
 
const button = document.querySelector('[data-submit-button]');

const inputValue = document.querySelector('[data-input-value]');

const test = document.querySelector('.main-container');


button.addEventListener('click', () => {
  weatherApi(inputValue.value);

  inputValue.value = '';
});

test.addEventListener('click', (e) => {

  switchMeasurement(e);
})

