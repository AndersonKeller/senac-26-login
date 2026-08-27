function realizarLogin() {
    localStorage.setItem("email", 'email@email.com')
    const user = {
        email: "email@email.com",
        nome: "Anderson"
    }
    const userJson = JSON.stringify(user)//JSON
    localStorage.setItem("user", userJson)
    setTimeout(() => {
        window.location.href = "/"
    }, 3000);
}
function formLogin() {
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log('form submit')
        const inputEmail = document.querySelector("#email")
        const inputSenha = document.querySelector("#senha")
        console.log(inputEmail.value, inputSenha.value)
        if (inputEmail.value == "admin@email.com" && inputSenha.value == "1234") {
            localStorage.setItem("email", inputEmail.value)
            const user = {
                email: inputEmail.value,
                nome: inputEmail.value
            }
            const userJson = JSON.stringify(user)//JSON
            localStorage.setItem("user", userJson)
            montarModal("Login efetuado com sucesso!")
            setTimeout(() => {

                location.href = "/"
            }, 3000);
        } else {
            montarModal("Credenciais inválidas")
        }
    })
}
formLogin()
//MODAL
function montarModal(mensagem) {
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div class="wrapper">
        <div class="modal">
            <p>${mensagem}</p>
            <button id="close">Tentar novamente</button>
        </div>
    </div>
        `)
    const btnClose = document.querySelector("#close")
    btnClose.addEventListener("click", () => {
        const wrapper = document.querySelector(".wrapper")
        wrapper.remove()
    })
}