const prompt = require('prompt-sync')();

// Mostrar o valor total da compra
let valorTotalCompra = parseFloat(prompt("Qual é o valor total da compra?"));

// Pedir o número de pessoas na mesa
let numeroDePessoas = parseInt(prompt("Quantas pessoas estão na mesa?"));

// Calcula o valor que cada pessoa deve pagar
let valorPorPessoa = valorTotalCompra / numeroDePessoas;

// Cria um objeto para armazenar os métodos de pagamento de cada pessoa
let metodosDePagamento = {};

// Solicita o método de pagamento para cada pessoa
for (let i = 1; i <= numeroDePessoas; i++) {
    const metodo = prompt(`Qual é o método de pagamento da pessoa ${i}? (PIX, dinheiro, cartão): `);
    metodosDePagamento[`Pessoa ${i}`] = metodo.toLowerCase();
}

// Define os descontos com base nos métodos de pagamento de cada pessoa
let descontoPorPessoa = {};
for (const pessoa in metodosDePagamento) {
    if (metodosDePagamento[pessoa] === "pix" || metodosDePagamento[pessoa] === "dinheiro") {
        descontoPorPessoa[pessoa] = 0.1; // 10% de desconto para pagamento via PIX ou em dinheiro
    } else {
        descontoPorPessoa[pessoa] = 0;
    }
}

// Calcula o valor total com desconto para cada pessoa
let valorTotalComDescontoPorPessoa = {};
for (const pessoa in metodosDePagamento) {
    const desconto = descontoPorPessoa[pessoa];
    valorTotalComDescontoPorPessoa[pessoa] = valorPorPessoa * (1 - desconto);
}

// Exibe os resultados
console.log("Valor total da compra: R$" + valorTotalCompra.toFixed(2));
console.log("Cada pessoa deve pagar: R$" + valorPorPessoa.toFixed(2));
for (const pessoa in metodosDePagamento) {
    console.log(`${pessoa} - Método de pagamento: ${metodosDePagamento[pessoa]}, Valor a pagar: R$${valorTotalComDescontoPorPessoa[pessoa].toFixed(2)}`);
}
