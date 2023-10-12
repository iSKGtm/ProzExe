let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
    quantidade: 1,
    valor: 11.66,
};

function atualizarSubtotal(){
    if(subtotalInfo.quantidade == 1){
        quantidadeSubtotal.innerText = subtotalInfo.quantidade + " Ítem";
    }
    else if(subtotalInfo.quantidade == 0){
        quantidadeSubtotal.innerText = " Nenhum Ítem";
    }
    else if(subtotalInfo.quantidade < 0){
        quantidadeSubtotal.innerText = "RECARREGANDO PAGINA";
        console.log("ERRO: CALCULO ZERO NEGATIVO, RECARREGAR...")
        location.reload();
    }
    else {
        quantidadeSubtotal.innerText = subtotalInfo.quantidade + " Ítens";
    }
    valorSubtotal.innerText = (subtotalInfo.valor * subtotalInfo.quantidade).toFixed(2);
}


// Variaveis / Dados //

let btnAdicionarProduto01 = document.querySelector("#btn-adicionar-produto-01");

let btnSubtrairProduto01 = document.querySelector("#btn-subtrair-produto-01");

let quantidadeProduto01 = document.querySelector("#quantidade-produto-01");

// Função //

function adicionarUm() {
    if(quantidadeProduto01.value < 10) {
        quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
        subtotalInfo.quantidade = subtotalInfo.quantidade + 1;
    }else{
        subtotalInfo.quantidade = 10;
    }
    atualizarSubtotal();
}

function diminuirUm() {
    if(quantidadeProduto01.value > 0) {
        quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
        subtotalInfo.quantidade = subtotalInfo.quantidade - 1;
    }
    atualizarSubtotal();
}

// Eventos //
atualizarSubtotal();
btnAdicionarProduto01.addEventListener("click", adicionarUm);
btnSubtrairProduto01.addEventListener("click", diminuirUm);