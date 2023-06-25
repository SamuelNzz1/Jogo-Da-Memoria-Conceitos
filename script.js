const memoryCards = document.querySelector(".memory-cards");







const createElemento = (tag, className) => {

    const element = document.createElement(tag);
    element.className = className;
    return element;

}

const conceitos = [
    'onclick',
    'É acionado quando um elemento HTML é clicado. Ele permite que você execute uma função ou realize uma ação específica quando o clique ocorre. É bastante usado para adicionar interatividade a elementos como botões, links e imagens.',
    'onmouseover',
    'É acionado quando o cursor do mouse é movido sobre um elemento HTML. Ele é útil para criar interações quando o usuário passa o mouse sobre um elemento específico.',
    'onmouseout',
    'É acionado quando o cursor do mouse é movido para fora de um elemento HTML. Permite que você realize ações quando o usuário remove o mouse de um elemento.',
    'onmousemove',
    'É acionado quando o cursor do mouse é movido dentro de um elemento HTML. Ele permite que você rastreie o movimento do mouse e realize ações com base na posição atual do cursor. Pode ser usado para criar recursos interativos que respondem ao movimento do mouse.',
    'onmousedown',
    'É acionado quando um botão do mouse é pressionado enquanto o cursor está sobre um elemento HTML. Ele permite que você detecte quando um botão do mouse é pressionado e realize ações correspondentes.',
];
const conceitos2 = [

    'if...else',
    'Permite a execução condicional de um bloco de código, dependendo de uma condição especificada.',
    'for',
    'Cria um loop que executa um bloco de código repetidamente com base em uma condição específica.',
    'function',
    'Define uma função reutilizável que pode ser chamada em diferentes partes do programa.',
    'document.getElementById',
    'Recupera um elemento HTML específico do documento com base no seu ID.',
    'addEventListener',
    'Associa um evento a um elemento HTML, permitindo que uma função seja executada quando o evento ocorre.'
];
const conceitos3 = [
    'console.log()',
    'Exibe uma mensagem no console do navegador ou ambiente de desenvolvimento.',
    'alert()',
    'Exibe uma mensagem em uma caixa de diálogo no navegador.',
    'parseInt()',
    'Converte uma string em um número inteiro.',
    'prompt()',
    'Exibe uma caixa de diálogo para o usuário inserir um valor e retorna o valor inserido.',
    'Array.push()',
    'Adiciona um ou mais elementos ao final de um array.',

];

const conceitos4 = [
    'Promise',
    'Representa um valor que pode estar disponível agora, no futuro ou nunca. É usado para lidar com operações assíncronas e possibilita o encadeamento de ações em resposta a um resultado (resolve) ou erro (reject).',
    'async/await',
    'Uma sintaxe do JavaScript para escrever código assíncrono de forma mais síncrona. define uma função assíncrona que retorna uma `Promise`, enquanto o `await` é usado dentro dessa função para esperar a conclusão de uma `Promise` antes de continuar a execução.',
    'Map',
    'Uma estrutura de dados do JavaScript que armazena pares de chave-valor. Permite a recuperação eficiente de valores com base em suas chaves e oferece métodos para adicionar, remover e iterar sobre os elementos.',
    'Arrow Function',
    'Uma forma mais concisa de escrever funções no JavaScript, são especialmente úteis para funções de uma única expressão e têm um comportamento de escopo léxico, mantendo o valor de `this` do contexto ao qual pertencem.',
    'Spread Operator',
    'Um operador representado por três pontos (`...`) usado para espalhar os elementos de um array ou objeto em outro array ou objeto. É útil para criar cópias, combinar arrays, passar argumentos em funções e criar objetos literais de forma mais concisa.'
];

const conceitos5 = [
    'Generator',
    'Uma função especial que pode ser pausada e retomada em diferentes pontos de execução, permitindo a criação de iteradores personalizados.',
    'Proxy',
    'Um objeto que envolve outro objeto e pode interceptar e personalizar operações fundamentais, como leitura e escrita de propriedades.',
    'Closure',
    'Uma função que mantém acesso a variáveis externas, mesmo após ter sido retornada da função que a criou.',
    'Memoization',
    'Uma técnica de otimização que armazena em cache o resultado de uma função para evitar cálculos repetidos com os mesmos argumentos.',
    'Currying',
    'Transformar uma função com múltiplos argumentos em uma sequência de funções que recebem um único argumento, permitindo a aplicação parcial dos argumentos.',
    'Debounce',
    'Uma técnica que limita a frequência com que uma função é executada, garantindo que ela só seja chamada após um determinado período de inatividade.',
    'Hoisting',
    'O comportamento do JavaScript de mover declarações de variáveis e funções para o topo de seus respectivos escopos durante a fase de compilação.',
    'IIFE (Immediately Invoked Function Expression)',
    'Uma função que é definida e invocada imediatamente, permitindo isolar variáveis e criar escopos privados.'
];




var acertos = 0;
var rodadas = 0;
let primeiraCarta = '', segundaCarta = '';
const checarFinalDoJogo = () => {
    
    if (rodadas == 4){
        
        
        if(acertos == 8){
            rodadas +=1;
            alert('Parabens você passou ' + rodadas + ' rodadas');
            
            var decisao = prompt("O jogo chegou ao final, deseja jogar de novo?");

            if (decisao === "sim" || decisao === "comcerteza" || decisao === "com certeza") {
                document.getElementById("barra2").classList.remove("mudarCorB2");
                document.getElementById("barra3").classList.remove("mudarCorB3");
                document.getElementById("barra4").classList.remove("mudarCorB4");
                document.getElementById("barra5").classList.remove("mudarCorB5");
                rodadas = 0;
                memoryCards.innerHTML = '';
                carregarJogo();
            }
            else{
                alert('Ok, Aproveite pra aprender mais um pouco desses conceitos');
                return;
            }
        }



    }
    else if (acertos == 5) {
    rodadas +=1;

        setTimeout(() => {

            if (rodadas == 1)
                alert('Parabens você passou ' + rodadas + ' rodada');

            else
                alert('Parabens você passou ' + rodadas + ' rodadas');




           


            acertos = 0;
            

            if (rodadas == 1) {
                memoryCards.innerHTML = '';
                carregarJogo2();

                document.getElementById("barra2").classList.add("mudarCorB2");

            }

            else if (rodadas == 2) {
                memoryCards.innerHTML = '';
                carregarJogo3();
                document.getElementById("barra3").classList.add("mudarCorB3");
            }
            else if (rodadas == 3) {
                memoryCards.innerHTML = '';
                carregarJogo4();
                document.getElementById("barra4").classList.add("mudarCorB4");
            }
            else if (rodadas == 4) {
                memoryCards.innerHTML = '';
                carregarJogo5();
                document.getElementById("barra5").classList.add("mudarCorB5");
            }
           

        }, 300);








    }
}

const checarCartas = () => {
    const primeiroConceito = primeiraCarta.getAttribute('data-conceito');
    const segundoConceito = segundaCarta.getAttribute('data-conceito');

    if (primeiroConceito === segundoConceito) {
        primeiraCarta.style.boxShadow = "0px 0px 5px 5px  #e6f144";
        segundaCarta.style.boxShadow = "0px 0px 5px 5px #e6f144";

        primeiraCarta.firstChild.style.opacity = "0.7";
        segundaCarta.firstChild.style.opacity = "0.7";



        primeiraCarta = '';
        segundaCarta = '';

        acertos += 1;

        checarFinalDoJogo();

    } else {

        setTimeout(() => {
            primeiraCarta.classList.remove('revelar-carta');
            segundaCarta.classList.remove('revelar-carta');
            primeiraCarta = '';
            segundaCarta = '';
        }, 2000);



    }
}


const revelarCarta = ({ target }) => {
    console.log(target.parentNode);


    if (target.parentNode.className.includes('revelar-carta')) {
        return;
    }
    if (primeiraCarta === '') {

        target.parentNode.classList.add('revelar-carta');

        primeiraCarta = target.parentNode;


    } else if (segundaCarta === '') {
        target.parentNode.classList.add('revelar-carta');
        segundaCarta = target.parentNode;

        checarCartas();
    }



}


const createCard = (conceito) => {



    const cardMemory = createElemento('div', 'card-memory');
    const frontface = createElemento('div', 'card frontface');
    const backface = createElemento('div', 'card backface');

    cardMemory.appendChild(frontface);
    cardMemory.appendChild(backface);

    frontface.innerHTML = conceito;


    cardMemory.addEventListener('click', revelarCarta);

    if (conceito === "onclick" || conceito === "É acionado quando um elemento HTML é clicado. Ele permite que você execute uma função ou realize uma ação específica quando o clique ocorre. É bastante usado para adicionar interatividade a elementos como botões, links e imagens.") {
        cardMemory.setAttribute('data-conceito', 'c1');
    }

    if (conceito === "onmouseover" || conceito === "É acionado quando o cursor do mouse é movido sobre um elemento HTML. Ele é útil para criar interações quando o usuário passa o mouse sobre um elemento específico.") {
        cardMemory.setAttribute('data-conceito', 'c2');
    }

    if (conceito === "onmouseout" || conceito === "É acionado quando o cursor do mouse é movido para fora de um elemento HTML. Permite que você realize ações quando o usuário remove o mouse de um elemento.") {
        cardMemory.setAttribute('data-conceito', 'c3');
    }

    if (conceito === "onmousemove" || conceito === "É acionado quando o cursor do mouse é movido dentro de um elemento HTML. Ele permite que você rastreie o movimento do mouse e realize ações com base na posição atual do cursor. Pode ser usado para criar recursos interativos que respondem ao movimento do mouse.") {

        cardMemory.setAttribute('data-conceito', 'c4');
    }

    if (conceito === "onmousedown" || conceito === "É acionado quando um botão do mouse é pressionado enquanto o cursor está sobre um elemento HTML. Ele permite que você detecte quando um botão do mouse é pressionado e realize ações correspondentes.") {
        cardMemory.setAttribute('data-conceito', 'c5');
    }



    cardMemory.onmouseover = () => {
        cardMemory.classList.add('move-card');
    };
    cardMemory.onmouseout = () => {
        cardMemory.classList.remove('move-card');
    };

    return cardMemory;


}
const createCard2 = (conceito) => {



    const cardMemory = createElemento('div', 'card-memory');
    const frontface = createElemento('div', 'card frontface');
    const backface = createElemento('div', 'card backface');

    cardMemory.appendChild(frontface);
    cardMemory.appendChild(backface);

    frontface.innerHTML = conceito;


    cardMemory.addEventListener('click', revelarCarta);

    if (conceito === 'if...else' || conceito === 'Permite a execução condicional de um bloco de código, dependendo de uma condição especificada.') {
        cardMemory.setAttribute('data-conceito', 'c1');
    }

    if (conceito === 'for' || conceito === 'Cria um loop que executa um bloco de código repetidamente com base em uma condição específica.') {
        cardMemory.setAttribute('data-conceito', 'c2');
    }

    if (conceito === 'function' || conceito === 'Define uma função reutilizável que pode ser chamada em diferentes partes do programa.') {
        cardMemory.setAttribute('data-conceito', 'c3');
    }

    if (conceito === 'document.getElementById' || conceito === 'Recupera um elemento HTML específico do documento com base no seu ID.') {
        cardMemory.setAttribute('data-conceito', 'c4');
    }

    if (conceito === 'addEventListener' || conceito === 'Associa um evento a um elemento HTML, permitindo que uma função seja executada quando o evento ocorre.') {
        cardMemory.setAttribute('data-conceito', 'c5');
    }




    cardMemory.onmouseover = () => {
        cardMemory.classList.add('move-card');
    };
    cardMemory.onmouseout = () => {
        cardMemory.classList.remove('move-card');
    };

    return cardMemory;


}
const createCard3 = (conceito) => {



    const cardMemory = createElemento('div', 'card-memory');
    const frontface = createElemento('div', 'card frontface');
    const backface = createElemento('div', 'card backface');

    cardMemory.appendChild(frontface);
    cardMemory.appendChild(backface);

    frontface.innerHTML = conceito;


    cardMemory.addEventListener('click', revelarCarta);

    if (conceito === 'console.log()' || conceito === 'Exibe uma mensagem no console do navegador ou ambiente de desenvolvimento.') {
        cardMemory.setAttribute('data-conceito', 'c1');
    }

    if (conceito === 'alert()' || conceito === 'Exibe uma mensagem em uma caixa de diálogo no navegador.') {
        cardMemory.setAttribute('data-conceito', 'c2');
    }

    if (conceito === 'parseInt()' || conceito === 'Converte uma string em um número inteiro.') {
        cardMemory.setAttribute('data-conceito', 'c3');
    }

    if (conceito === 'prompt()' || conceito === 'Exibe uma caixa de diálogo para o usuário inserir um valor e retorna o valor inserido.') {
        cardMemory.setAttribute('data-conceito', 'c4');
    }

    if (conceito === 'Array.push()' || conceito === 'Adiciona um ou mais elementos ao final de um array.') {
        cardMemory.setAttribute('data-conceito', 'c5');
    }




    cardMemory.onmouseover = () => {
        cardMemory.classList.add('move-card');
    };
    cardMemory.onmouseout = () => {
        cardMemory.classList.remove('move-card');
    };

    return cardMemory;


}
const createCard4 = (conceito) => {



    const cardMemory = createElemento('div', 'card-memory');
    const frontface = createElemento('div', 'card frontface');
    const backface = createElemento('div', 'card backface');

    cardMemory.appendChild(frontface);
    cardMemory.appendChild(backface);

    frontface.innerHTML = conceito;


    cardMemory.addEventListener('click', revelarCarta);

    if (conceito === 'Promise' || conceito === 'Representa um valor que pode estar disponível agora, no futuro ou nunca. É usado para lidar com operações assíncronas e possibilita o encadeamento de ações em resposta a um resultado (resolve) ou erro (reject).') {
        cardMemory.setAttribute('data-conceito', 'c1');
    }

    if (conceito === 'async/await' || conceito === 'Uma sintaxe do JavaScript para escrever código assíncrono de forma mais síncrona. define uma função assíncrona que retorna uma `Promise`, enquanto o `await` é usado dentro dessa função para esperar a conclusão de uma `Promise` antes de continuar a execução.') {
        cardMemory.setAttribute('data-conceito', 'c2');
    }

    if (conceito === 'Map' || conceito === 'Uma estrutura de dados do JavaScript que armazena pares de chave-valor. Permite a recuperação eficiente de valores com base em suas chaves e oferece métodos para adicionar, remover e iterar sobre os elementos.') {
        cardMemory.setAttribute('data-conceito', 'c3');
    }

    if (conceito === 'Arrow Function' || conceito === 'Uma forma mais concisa de escrever funções no JavaScript, são especialmente úteis para funções de uma única expressão e têm um comportamento de escopo léxico, mantendo o valor de `this` do contexto ao qual pertencem.') {
        cardMemory.setAttribute('data-conceito', 'c4');
    }

    if (conceito === 'Spread Operator' || conceito === 'Um operador representado por três pontos (`...`) usado para espalhar os elementos de um array ou objeto em outro array ou objeto. É útil para criar cópias, combinar arrays, passar argumentos em funções e criar objetos literais de forma mais concisa.') {
        cardMemory.setAttribute('data-conceito', 'c5');
    }




    cardMemory.onmouseover = () => {
        cardMemory.classList.add('move-card');
    };
    cardMemory.onmouseout = () => {
        cardMemory.classList.remove('move-card');
    };

    return cardMemory;


}
const createCard5 = (conceito) => {



    const cardMemory = createElemento('div', 'card-memory');
    const frontface = createElemento('div', 'card frontface');
    const backface = createElemento('div', 'card backface');

    cardMemory.appendChild(frontface);
    cardMemory.appendChild(backface);

    frontface.innerHTML = conceito;


    cardMemory.addEventListener('click', revelarCarta);

    if (conceito === 'Generator' || conceito === 'Uma função especial que pode ser pausada e retomada em diferentes pontos de execução, permitindo a criação de iteradores personalizados.') {
        cardMemory.setAttribute('data-conceito', 'c1');
    }

    if (conceito === 'Proxy' || conceito === 'Um objeto que envolve outro objeto e pode interceptar e personalizar operações fundamentais, como leitura e escrita de propriedades.') {
        cardMemory.setAttribute('data-conceito', 'c2');
    }

    if (conceito === 'Closure' || conceito === 'Uma função que mantém acesso a variáveis externas, mesmo após ter sido retornada da função que a criou.') {
        cardMemory.setAttribute('data-conceito', 'c3');
    }

    if (conceito === 'Memoization' || conceito === 'Uma técnica de otimização que armazena em cache o resultado de uma função para evitar cálculos repetidos com os mesmos argumentos.') {
        cardMemory.setAttribute('data-conceito', 'c4');
    }

    if (conceito === 'Currying' || conceito === 'Transformar uma função com múltiplos argumentos em uma sequência de funções que recebem um único argumento, permitindo a aplicação parcial dos argumentos.') {
        cardMemory.setAttribute('data-conceito', 'c5');
    }

    if (conceito === 'Debounce' || conceito === 'Uma técnica que limita a frequência com que uma função é executada, garantindo que ela só seja chamada após um determinado período de inatividade.') {
        cardMemory.setAttribute('data-conceito', 'c6');
    }

    if (conceito === 'Hoisting' || conceito === 'O comportamento do JavaScript de mover declarações de variáveis e funções para o topo de seus respectivos escopos durante a fase de compilação.') {
        cardMemory.setAttribute('data-conceito', 'c7');
    }

    if (conceito === 'IIFE (Immediately Invoked Function Expression)' || conceito === 'Uma função que é definida e invocada imediatamente, permitindo isolar variáveis e criar escopos privados.') {
        cardMemory.setAttribute('data-conceito', 'c8');
    }



    cardMemory.onmouseover = () => {
        cardMemory.classList.add('move-card');
    };
    cardMemory.onmouseout = () => {
        cardMemory.classList.remove('move-card');
    };

    return cardMemory;


}
























const carregarJogo = () => {


    const arrayEmbaralhado = conceitos.sort(() => Math.random() - 0.5);


    arrayEmbaralhado.forEach((conceito) => {
        const card = createCard(conceito);

        memoryCards.appendChild(card);


    });


}
const carregarJogo2 = () => {


    const arrayEmbaralhado = conceitos2.sort(() => Math.random() - 0.5);


    arrayEmbaralhado.forEach((conceito) => {
        const card = createCard2(conceito);

        memoryCards.appendChild(card);


    });


}
const carregarJogo3 = () => {


    const arrayEmbaralhado = conceitos3.sort(() => Math.random() - 0.5);


    arrayEmbaralhado.forEach((conceito) => {
        const card = createCard3(conceito);

        memoryCards.appendChild(card);


    });


}
const carregarJogo4 = () => {


    const arrayEmbaralhado = conceitos4.sort(() => Math.random() - 0.5);


    arrayEmbaralhado.forEach((conceito) => {
        const card = createCard4(conceito);

        memoryCards.appendChild(card);


    });


}
const carregarJogo5 = () => {


    const arrayEmbaralhado = conceitos5.sort(() => Math.random() - 0.5);


    arrayEmbaralhado.forEach((conceito) => {
        const card = createCard5(conceito);

        memoryCards.appendChild(card);


    });


}

carregarJogo();

