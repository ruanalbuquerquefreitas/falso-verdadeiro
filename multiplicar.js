console.log ("---SISTEMA DE FATURAMENTO CORREÇÃO---");
console.log("");

function calcularTotalItem(precoUnitario, quantidade){
    return precoUnitario * quantidade;
}

let totalDaCompra = calcularTotalItem(45,3);
console.log("produto: Mouse Gamer");
console.log("preço: R$ 45.00 : Quantidade 3");
console.log("Valor Total a pagar : R$"  + totalDaCompra);

console.log("");
console.log("-----FIM-----");