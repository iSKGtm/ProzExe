function connect() {
    let titulo = document.querySelector("h1");
    titulo.innerText = "Novo título com JS."
    link.innerText = "Novo link com JS."

    let lista = document.querySelector("ul")
    lista.innerHTML = `
    <li>Lista JS 1 UL</li>
    <li>Lista JS 2 UL</li>
    <li>Lista JS 3 UL</li>
    `

    let listaOrd = document.querySelector("ol")
    listaOrd.innerHTML = `
    <li><a href="https://linktr.ee/iSKGtm"</a>Links</li>
    <li><a href="https://github.com/iSKGtm"</a>GitHub</li>
    <li><a href="https://prozeducacao.com.br">Proz</a></li>
    `
}

connect();