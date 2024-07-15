//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';//

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

let numeroSecreto = gerarNumero(); 

let tentativas = 1;

console.log(numeroSecreto)

function exibirTexto(tag, texto) {
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial()

function verificarChute() {
    let chute = parseInt(document.querySelector("input").value);
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou')
        exibirTexto('p', `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', "O número secreto é menor");
        } else {
            exibirTexto('p', "O número secreto é maior");
        }
        tentativas++;
        limparCampo()
    }
    
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = '';
}


function gerarNumero(){
    return parseInt(Math.random() * 10 + 1);
}

function exibirMensagemInicial() {
    exibirTexto('h1', "Jogo do numero secreto");
    exibirTexto('p', "Escolha um numero entre 1 e 10");
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    tentativas = 1;
    limparCampo()
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto)
}


