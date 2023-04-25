// Nesse template temos uma lista de itens e um formulário. Agora, ao clicar no botão "Clique para inserir" devemos adicionar o conteúdo do Formulário ao final da nossa lista de itens

function insereItem(event) {
    const input = document.getElementById("meu-input")
    const lista = document.getElementById("lista")

    const elemento = document.createElement("li")
    elemento.innerHTML = input.value

    lista.insertAdjacentElement("beforeend",elemento)
}