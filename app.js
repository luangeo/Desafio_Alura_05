let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarClique(){
    console.log('O botão foi clicado');
}

function mensagemAlerta(){
    alert('Eu amo JS');
}

function pergunteCidade(){
    let cidade = prompt('Digite uma cidade: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somarNumeros(){
    let numero1 = parseInt(prompt('Digite o primeiro número: '));
    let numero2 = parseInt(prompt('Digite o segundo numero: '));
    let resultado = numero1 + numero2;
    alert(`A soma de ${numero1} com ${numero2} é de ${resultado}`);
}