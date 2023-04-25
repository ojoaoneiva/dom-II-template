// Neste template, temos um formulário de login. Ao lado do campo de senha temos um botão para esconder a senha. Implemente no onclick deste botão uma função para alterar o type do input para password.
// Além disso, altere a classe CSS do elemento form na página, removendo a classe “light” e adicionando a classe “dark”

function escondeSenha(event) {
    event.preventDefault()
    const senha = document.getElementById("password")
    senha.setAttribute("type","password")
}

const form = document.querySelector(".light")
form.classList.remove("light")
form.classList.add("dark")