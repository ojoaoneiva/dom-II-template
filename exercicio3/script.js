// Neste template, temos um input para o usuário digitar um texto, e um parágrafo em branco. Utilizando eventos, verifique se o usuário está segurando Shift enquanto digita. Caso esteja, altere o valor do parágrafo para: ATENÇÃO: SEGURANDO SHIFT. Caso não esteja, o parágrafo volta a estar vazio



function checaCaps(event) {
    const parágrafo = document.getElementById("mensagem")

    if(event.key === "Shift") {
        parágrafo.innerHTML = "ATENÇÃO: SEGURANDO SHIFT"
    }
    else {
        parágrafo.innerHTML = ""
    }
}