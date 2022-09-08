/**
 * Temperature converter program
 * 
 * Formula
 * 
 * °C => °F - (°C × 9/5) + 32 = °F
 * °C => °K - C + 273,15 = K
 * °F => °C - (°F − 32) × 5/9 = °C
 * °F => °K - (°F − 32) × 5/9 + 273,15 = K
 * °K => °C - 273,15 = °C
 * °K => °F - (K − 273,15) × 9/5 + 32 = °F
 */

/**
 * TODO list
 * 
 * [x] Get variables initialization
 * [ ] Create function to get convert value
 * [ ] Create function to get radio selection
 * [ ] Create function to write the converted temperatures on the result inputs
 */

/**
 * Variables initialization
 */

/**
 * DOM elements
 */

/**Value to convert
*/
const elValueToConvert = document.getElementById('convertValue');

/**Temperatures 
*/
const elTempCelcius = document.getElementById('celcius');

const elTempFahrenheit = document.getElementById('fahrenheit');

const elTempKelvin = document.getElementById('kelvin');

/**Result
 */
const elResultCelcius = document.getElementById('resultCelcius');

const elResultFahrenheit = document.getElementById('resultFahrenheit');

const elResultKelvin = document.getElementById('resultKelvin');

