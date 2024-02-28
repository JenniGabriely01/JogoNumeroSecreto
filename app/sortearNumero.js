const maiorValor = 1000;
const menorValor = 1;
const numeroSecreto = gerearNumeroAleatorio();

function gerearNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
};

console.log('o numero secreto é', numeroSecreto);

/* buscando o id da tag que esta o 'menorValor' e dizendo que ela recebe o menor valor */
const elementoMenorValor = document.getElementById('menorValor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maiorValor');
elementoMaiorValor.innerHTML = maiorValor;