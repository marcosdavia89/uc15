console.log("olá, Luiz! Seja bem vindo!");
console.log("olá,Gustavo! Seja bem vindo!");
console.log("olá, Cecilia! Seja bem vinda!");

function darBoasVindas(nome){
    console.log(`olá, ${nome}! seja bem vindo!`)
}

darBoasVindas("Luiz");
darBoasVindas("Gustavo");
darBoasVindas("Cecilia");


function apresentar(nome, idade){
    console.log(`meu nome é ${nome} e tenho ${idade} anos.`);

}

apresentar("marcos",15)

function estudando(nome, marcos)}
const estudar = (nome) => console.log(`${nome} esta estudando`)
estudar("marcos")

function somar(a,b) {
   return a+bem
}

somar(5,3)


let resultado = somar(5,3);

console.log(resultado);


/**
 * Função que calcula a média de duas notas e exibe se foi aprovado ou reprovado.
 * @param {number} nota1 - Primeira nota (0 a 10)
 * @param {number} nota2 - Segunda nota (0 a 10)
 */
function verificarMedia(nota1, nota2) {
    // Validação de tipo e faixa
    if (typeof nota1 !== 'number' || typeof nota2 !== 'number') {
        console.log("Erro: As notas devem ser números.");
        return;
    }
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        console.log("Erro: As notas devem estar entre 0 e 10.");
        return;
    }

    const media = (nota1 + nota2) / 2;
    console.log(`Média: ${media.toFixed(2)}`);

    if (media > 6) {
        console.log("Resultado: Aprovado");
    } else {
        console.log("Resultado: Reprovado");
    }
}

// ===== Exemplo de uso =====
// No navegador, você pode usar prompt():
// const n1 = parseFloat(prompt("Digite a primeira nota:"));
// const n2 = parseFloat(prompt("Digite a segunda nota:"));
// verificarMedia(n1, n2);

// No Node.js, exemplo direto:
verificarMedia(7.5, 8.0); // Aprovado
verificarMedia(5.0, 6.0); // Reprovado
verificarMedia(11, 5);    // Erro de validação

function calcularmedia(nota1, nota2) {
let nota1 = number(prompt("digite a primeira nota"));
let nota2 = number(prompt("digite a segunda nota"))
}
let media1 = calcularmedia(nota1 ,nota2);

console.log(`${nome} ficou com média ${media1}`)

if (media >= 6) {
    console.log("infelizemente, você não foi aprovada(a).");
}

calcularmedia(nota1, nota2);

// atv

function calcularviagem(passagem,hospedagem,alimentação,passeios) {
    return passagem + hospedagem + alimentação + passeios
}

let passagem = Number(prompt("digite o valor da passagem"));
let hospedagem = Number(prompt("digite o valor da hospedagem"));
let alimentação = Number(prompt("digite o valor da alimentção"));
let passeios = Number(prompt("digite o valor das passagens"));
let totalviagem = calcularviagem(passagem,hospedagem,alimentação,passeios);
console.log(´o valor total de viagem é: ${totalviagem{´);

 if (totalviagem > 2000) {
    console.log("o valor total da viagem não está no orçamento. considere reduzir os gastos.");    
 } else {
    console.log("o valor total da viagem está dentro do orçamento.");
 }