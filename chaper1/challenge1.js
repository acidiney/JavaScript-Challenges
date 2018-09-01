const limite_gasto = 400; 
const preco_telefone = 100;
const preco_acessorio = 4;
const taxa = 0.02;

let saldo_banco = recebeSaldo();
let total = 0;


function recebeSaldo() {
  return prompt("Introduza o seu saldo bancario");
}

function calculaTaxa(total) {
  return total * taxa;
}

function formataMoeda(moeda) {
  return "AOA " + moeda.tofixed(2);
}


while (total < saldo_banco) {
  total += preco_telefone;

  if(total < limite_gasto) {
    total += preco_acessorio;
  }
}

total = total + calculaTaxa(total);

if(total > saldo_banco) {
  console.log('Impossivel realizar compra', 'seu saldo atual é de ', formataMoeda(saldo_banco), 'Valor da compra é de ', formataMoeda(total));
} else {

  console.log ('Compra realizada, saldo actual é de', formataMoeda(saldo_banco))
}