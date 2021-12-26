let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
}

let vetorAlpha = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j"];
for (let indice of vetorAlpha) {
    console.log(indice);
}

for (let numero in vetorAlpha) {
    console.log(vetorAlpha[numero]);
}

// Declaração e Manuseio de Matrizes  

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let linha of matriz) {
    for (let coluna of linha) {
        console.log(coluna);
    }
}
// Declaração e Manuseio de Funcões
function escreva(texto){
    console.log(texto);
}

escreva("Olá Mundo");
escreva("Olá Monica");

function somar(a, b){
    return a + b;
}

let resultado = somar(10, 20);
escreva(resultado);

// Outra forma de declarar uma funcao

const somar2 = (a, b) => a + b;

// não é necessário usar a palavra chave function nem usar return
escreva(somar2(8,15)); 

// Funcoes de Alta Ordem

const subtrair = (a, b) => a - b;
const aplcaOperacao = (a, b, operacao) => operacao(a, b);  

escreva(aplcaOperacao(29, 5, subtrair));

// Outra forma 

const somarX = (x) => (y) => x + y;
const somar10 = somarX(10);

const somar20 = somarX(20);

escreva( somar10(5));

// Aplicação Map que ajuda a reduzir a quantidade de linhas de codigo

const vetor3 = [ "10", "20", "30", "40", "50", "60", "70", "80", "90", "100" ];
const stringToInt = (x) => parseInt(x);
const vetorMap = vetor3.map(stringToInt);

escreva(vetorMap)

const vetor4 = vetor3.map(x => x * x);

escreva(vetor4);

// Função filter que ajuda a filtrar os valores de um vetor

const vetor5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = vetor5.filter(x => x % 2 === 0);

escreva(pares);

// Funcão Reduce que ajuda a reduzir a quantidade de linhas de codigo

const vetor6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = vetor6.reduce((total, atual) => total + atual);

escreva(soma);

const matriz2 = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18]

const somaColuna = (estado, item)=>{
    return [estado[0]+item[0]+item[1], estado[1]+item[2]+item[3], estado[2]+item[2]+item[3]];
};

const vetor7 = matriz2.reduce(somaColuna, [0, 0, 0]);
escreva(vetor7);