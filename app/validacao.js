function chuteInvalido(numero) {
    return Number.isNaN(numero)
};

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
};

/* botao de jogar novamente */
document.body.addEventListener('click', e => {
    /* se o botao for clicado a pagina recarrega */
    if (e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
});

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    /* caso o usuario nao dizer um numero */
    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div> valor invalido </div>'

        return
    };
    
    /* se o numero for fora de 0 e 1000 aparecerá essa mensagem */
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `Valor invalido: o número socreto precisa estar entre ${menorValor} e ${maiorValor}`

        /* caso o numero for maior ou menor nao executa mais nada nessa funcao */
        return
    };

    /* caso o valor seja valido */
    if (numero === numeroSecreto) {
        /* criando uma nova tela */
        document.body.innerHTML = `
        <h2> Você Acertou!!</h2> 
        <h3>O numero secreto era ${numeroSecreto}</h3>    
        <button class="jogarNovamente" id="jogarNovamente">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto){ /* se o numero que a pessoa valor foi menor que o numero secreto */
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i> </div>
        `
    }else{ /* caso o numero for maior */
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i> </div>
        `
    }

};
