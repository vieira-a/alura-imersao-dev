/**
 * Temperature converter program
 * 
/**
 * Variables initialization
 */

/**
 * General
 */

let temperatureToConvert = 0;

let selectTemperature = 'celcius';

let resultInCelcius = 0;

let resultInFahrenheit = 0;

let resultInKelvin = 0;

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

/** Get convert value
 */

function getValueToConvert(){
    
    elValueToConvert.addEventListener('change', ()=>{
        
        temperatureToConvert = Number(elValueToConvert.value)

    })
}

function getBaseTemperature(){

    if(elTempCelcius.addEventListener('click', ()=>{
    
        selectTemperature = 'celcius';

        celciusToFahrenheit()

        celciusToKelvin()
    
    })){

    } else if(elTempFahrenheit.addEventListener('click', ()=>{

        selectTemperature = 'fahrenheit';

        fahrenheitToCelcius()

        fahrenheitToKelvin()

    })) {

    } else if(elTempKelvin.addEventListener('click', ()=>{

        selectTemperature = 'kelvin';

        kelvinToCelcius()

        kelvinToFahrenheit()

    })){

    }

}

/**
 * Calculate conversion
 * 
 * °C => °F - (°C × 9/5) + 32 = °F
 */

function celciusToFahrenheit(){

    elResultCelcius.value = `${temperatureToConvert} °C`;

    tempResult = ((temperatureToConvert * 9/5) + 32).toFixed(2);

    elResultFahrenheit.value = `${tempResult} °F`

}

/** °C => °K - C + 273,15 = K
 */
function celciusToKelvin() {

    elResultCelcius.value = `${temperatureToConvert} °C`;

    tempResult = (temperatureToConvert + 273.15).toFixed(2)

    elResultKelvin.value = `${tempResult} °K`;

}

/** °F => °C - (°F − 32) × 5/9 = °C
 */
function fahrenheitToCelcius() {

    elResultFahrenheit.value = `${temperatureToConvert} °F`;

    tempResult = ((temperatureToConvert - 32) * 5/9).toFixed(2);

    elResultCelcius.value = `${tempResult} °C`;

}

/** °F => °K - (°F − 32) × 5/9 + 273,15 = K
 */
function fahrenheitToKelvin() {

    elResultFahrenheit.value = `${temperatureToConvert} °F`;

    tempResult = ((temperatureToConvert - 32) * 5/9 + 273.15).toFixed(2);

    elResultKelvin.value = `${tempResult} °K`

}

/** °K => °C - 273,15 = °C
 */
function kelvinToCelcius() {

    elResultKelvin.value = `${temperatureToConvert} °K`;

    tempResult = (temperatureToConvert - 273.15).toFixed(2);

    elResultCelcius.value = `${tempResult} °C`

}

/** °K => °F - (K − 273,15) × 9/5 + 32 = °F
 */
function kelvinToFahrenheit() {

    elResultKelvin.value = `${temperatureToConvert} °K`;

    tempResult = ((temperatureToConvert - 273.15) * 9/5 + 32).toFixed(2);

    elResultFahrenheit.value = `${tempResult} °F`

}

getValueToConvert()
getBaseTemperature()