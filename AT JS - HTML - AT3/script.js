let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Loja de bebidas";

let body = document.querySelector("body");

body.appendChild(titulo);

let produto = document.createElement("div");


produto.innerHTML = `
  <div>
    <h2>Whisky Jack Daniels 150 Anos/h2>
    <p>1 Litro</p>
    <p id="valor">R$ 599.99</p>
  </div>
`;

body.appendChild(produto)