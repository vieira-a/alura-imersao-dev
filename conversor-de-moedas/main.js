/**
 * Program to convert BRL to USD and BTC according to price 07/09/2022
 * 
 * USD value: 5.25 BRL
 * BRL => USD = BRL/USD (1/5.25)
 * 
 * BTC value: 101340.12 BRL
 * BRL => BTC = BRL/BTC (1/101340.12)
 * 
 */

/**
 * Variables initialization
 * Global
 */
let coinConvert = "none"

let realValue = 0;

let realToDolar = 0;
    
let realToBitcoin = 0;  

let dolarValue = 5.25

let bitcoinValue = 101340.12

/**
 * DOM Elements
 */
const baseValue = document.getElementById('valor');

const dolar = document.getElementById('coinDolar');

const bitcoin = document.getElementById('coinBitcoin');

/**
 * Get base BRL value over input #valor
 */
function getBaseValue(){

    baseValue.addEventListener('change', function(){

        realValue = Number(baseValue.value);
        
        console.log(realValue)
    
    })

}

/**
 * Get coin name to convert over value radio options
 */
function getCoinConvert(){
    
    if(dolar.addEventListener('change', function(){
        
        coinConvert = 'dolar';
            
    })){

    } else if(bitcoin.addEventListener('change', function(){

        coinConvert = 'bitcoin'
        
    })){

    }
}

/**
 * Convertion: BRL > USD
 */
function convertRealToDolar() {
    
    realToDolar = (realValue / dolarValue).toFixed(2);
    
    valorConvertido.innerHTML = `R$ ${realValue} = U$ ${realToDolar}`
}

/**
 * Convertion: BRL > BTC
 */
function convertRealToBitcoin() {

    realToBitcoin = (realValue / bitcoinValue).toFixed(8);

    valorConvertido.innerHTML = `R$ ${realValue} = U$ ${realToBitcoin}`
}

/**
 * Convert action button
 */
function Converter(){
    
    if(coinConvert === 'dolar'){

        convertRealToDolar()

    } else if(coinConvert === 'bitcoin'){

        convertRealToBitcoin()

    } else {

        valorConvertido.innerHTML = "Informe a moeda"
    }
}

getBaseValue()
getCoinConvert()