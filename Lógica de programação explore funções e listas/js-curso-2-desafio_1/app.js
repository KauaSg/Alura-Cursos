let alteraH1 = document.querySelector('h1');
alteraH1.innerHTML = 'Hora do Desafio';

function exibirConsole() {
    console.log('O botão foi clicado')
}

function dobrarNumero() {
    numeroDigitado = prompt("Digite um numero")
    resultado = numeroDigitado*2
}

function Cidade() {
    cidadeDigitada = prompt("Digite o nome de uma cidade")
    alert(`Estive em ${cidadeDigitada} e lembrei de você`)
}

function Somar() {
    numero1 = parseFloat(prompt("Digite um numero para ser somado"))
    numero2 = parseFloat(prompt("Digite o segundo numero a ser somado"))
    resultado = numero1 + numero2;
    alert(`O resultado é ${resultado}`)
}