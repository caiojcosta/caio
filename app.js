function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);

    let campoPesquisa = document.getElementById
        ("campo-pesquisa").value

    console.log(campoPesquisa);

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let link = ""
    let linkDownload = ""

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.Descrição.toLowerCase()
        link = dado.link.toLowerCase()
        linkDownload = dado.linkDownload.toLowerCase()

        if (dado.titulo.includes(campoPesquisa)|| dado.Descrição.includes(campoPesquisa) || dado.link.includes(campoPesquisa)|| dado.linkDownload.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
         <h2>
            <a href="#" target="_blank">${dado.titulo}
            </a>
         </h2>
        <p class="descricao-meta">
        ${dado.Descrição}
        </p>
    
        <h5><p>Meus contatos:</p>
        </h5>
        <p>E-mail: caio.costa.cj@gmail.com</p>
        <p>WhatsApp: +55 (11) 9 8815-9572</p>
    
        <a href="${dado.link}" target="_blank"> Acesse meu Linkedin</a>
        <a href="${dado.linkDownload}" download="CV-CaioCosta"> | Baixe o CV do Caio </a>
        </p>
        </div>
        `
        } if (campoPesquisa == ""){
            section.innerHTML = "<p> Nada foi encontrado</p>"
            return
        }
    }

    section.innerHTML = resultados


}
