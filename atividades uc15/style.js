// 1. Definição das variáveis (Você pode alterar esses valores para testar)
const nomeCliente = "Maria";
const valorCompra = 650.00;
const clienteVip = false; // Mude para true para testar o desconto de 20%

// Variável para armazenar o percentual que será aplicado
let percentualDesconto = 0;

// 2. Estruturas if, else if e else usando operadores relacionais (>=)
if (clienteVip) {
    percentualDesconto = 20;
} else if (valorCompra >= 500) {
    percentualDesconto = 15;
} else if (valorCompra >= 200) {
    percentualDesconto = 10;
} else {
    percentualDesconto = 0;
}

// 3. Cálculos com porcentagem e operadores aritméticos
const valorDesconto = valorCompra * (percentualDesconto / 100);
const valorFinal = valorCompra - valorDesconto;

// 4. Exibição dos resultados no formato exigido
console.log(`Nome: ${nomeCliente}`);
console.log(`Valor da compra: R$ ${valorCompra.toFixed(2)}`);
console.log(`Desconto: ${percentualDesconto}%`);
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);

// 5. Desafio (Opcional): Lógica do Frete Grátis
if (valorFinal > 1000) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("Frete será cobrado normalmente.");
}