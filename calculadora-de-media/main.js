const resultElement = document.querySelector('.result');

let nome = ""

let mediaNotas = 0
    
let somaNotas = 0

let myNotes = []

function calculadora() {
    
    getNotas();
    
    calculaMedia()

}


function getNotas() {

    nome = prompt('Por favor, informe o seu nome')

    const nota1 = Number(window.prompt('Digite a primeira nota'));
    validaNota(nota1)
        
    const nota2 = Number(window.prompt('Digite a segunda nota'));
    validaNota(nota2)

    const nota3 = Number(window.prompt('Digite a terceira nota'));
    validaNota(nota3)

    const nota4 = Number(window.prompt('Digite a quarta nota'));
    validaNota(nota4)

}

function validaNota(nota) {

    if(isNaN(nota)) {
        
        alert('Nota inválida. Será substituída por 0.');

        myNotes.push(0);

    } else {
        
        myNotes.push(nota)
    }

}

function calculaMedia() {
    
    for(let nota = 0; nota < myNotes.length; nota++) {
        
        somaNotas += myNotes[nota];
        
        mediaNotas = (somaNotas / 4).toFixed(1);

        resultElement.innerHTML = `Olá ${nome}, sua média é ${mediaNotas}`
    }
}

calculadora()
