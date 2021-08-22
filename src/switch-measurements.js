import { fahrenheitToCelsius, celsiusToFahrenheit } from './temp-conversion';

export function switchMeasurement(e) {
  const temperatureValue = document.querySelectorAll('.temperature-degree');
  if (e.target.tagName === 'BUTTON') {
    if (e.target.dataset.conversionButton === 'fahrenheit') {
      temperatureValue.forEach((event)=>{
        const value = fahrenheitToCelsius(event.textContent);
      event.textContent = value;
      })
      
      e.target.dataset.conversionButton = 'celsius';
      e.target.innerHTML = '&degC';
    } else if (e.target.dataset.conversionButton === 'celsius') {
      temperatureValue.forEach((event)=>{
        const value = celsiusToFahrenheit(event.textContent);
        event.textContent = value;
      })
      
      e.target.dataset.conversionButton = 'fahrenheit';
      e.target.innerHTML = '&degF';
    }
  }
}
