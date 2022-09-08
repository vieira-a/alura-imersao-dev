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
 * [x] Create function to get convert value
 * [x] Create function to get radio selection
 * [ ] Create function to calculate conversions
 *  [x] °C => °F 
 *  [ ] °C => °K
 *  [ ] °F => °C
 *  [ ] °F => °K
 *  [ ] °K => °C
 *  [ ] °K => °F
 * [ ] Create function to write the converted temperatures on the result inputs
 */

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

    })) {

    } else if(elTempKelvin.addEventListener('click', ()=>{

        selectTemperature = 'kelvin';

    })){


    }

}

/**
 * Calculate conversion
 * 
 * °C => °F - (°C × 9/5) + 32 = °F
 */

function celciusToFahrenheit(){

    elResultCelcius.value = temperatureToConvert;

    elResultFahrenheit.value = (temperatureToConvert * 9/5) + 32;

}

/** °C => °K - C + 273,15 = K
 */
function celciusToKelvin() {

    elResultCelcius.value = temperatureToConvert;
    
    elResultKelvin.value = (temperatureToConvert + 273.15);

}

getValueToConvert()
getBaseTemperature()