/**
 * Escreva um programa para calcular o preço total da compra do seu telefone.
 * Você continuará comprando telefones (dica: loop!),
 * Até ficar sem dinheiro em sua conta bancária.
 * Você também comprará acessórios para cada telefone,
 * desde que o valor da sua compra esteja abaixo do limite de gastos mentais.
 * @author Acidiney Dias <acidineydias@gmail.com>
 */

console.log('-- CHALLENGE 1 --')
const price = 100;
const accessories = 50;
let accountBalance = 2000;
let total_amount;

let numPhones = 0;
let numAcc = 0;
function purchase() {
    accountBalance -= total_amount;
}

for (total_amount = 0;
    (accountBalance - total_amount) > 50; total_amount += (price + accessories)) {
    if (total_amount === 0) continue;
    console.log('#Comprando :-)');
    numAcc ++;
    numPhones ++;
}

purchase();
console.log(` * Comprou-se ${numPhones} Telefones \n * Comprou-se ${numAcc} Accessorios \n * Balanço final ${accountBalance}`);