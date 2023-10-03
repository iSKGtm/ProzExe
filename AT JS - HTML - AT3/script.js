function connect() {
    let titulo = document.querySelector("h1");
    titulo.innerText = "Venda de um produto"

    let elementoJS = document.createElement("li");
    elementoJS.innerText = "JS"
    elementoJS.id = "ling-js"

    let listaLinguagens = document.querySelector(".lista-linguagens");
    listaLinguagens.appendChild(elementoJS);


}
