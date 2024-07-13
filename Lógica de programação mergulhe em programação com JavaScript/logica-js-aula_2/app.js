alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100+1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
let contador = 10;

// Contagem regressiva antes do jogo começar
while (contador > 0) {
    console.log(contador);
    contador--;
}

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');

    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    tentativas++;
}

