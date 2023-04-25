// No template HTML do exercício, temos uma lista de elementos. Utilizando a manipulação do DOM, acrescente um item ao começo da lista e outro ao final. O texto dos elementos deve ser “Item 0” e “Item 5”, respectivamente.

const item1 = document.createElement("li")
item1.appendChild(document.createTextNode("item 0"))

const lista = document.getElementById("lista")
lista.insertAdjacentElement("afterbegin",item1)



















// const item0 = document.createElement("li")
// const conteudoDoitem0 = document.createTextNode("Item 0")

// item0.appendChild(conteudoDoitem0)

// const lista = document.getElementById("lista")
// lista.insertAdjacentHTML("afterbegin", item0)

// 1 - Criamos o elemento com createElement("li")

// 2 - Criamos o texto com createTextNode 

// 3 - Adicionamos o texto dentro da li a partir do aapendChild 

// 4 - pegamos a lista pelo id para mostrar ao código aonde add a informação 

// 5 - Adicionamos o elemento a lista com o lista.insertAdjacenteElement(" local ", item que queremos add)

// const item5 = document.createElement("li")
// const conteudoDoitem5 = document.createTextNode("item 5")
// item5.appendChild(conteudoDoitem5)
// lista.insertAdjacentElement("beforeend", item5)