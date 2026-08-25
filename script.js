console.log("script")
function verificaLogin() {
    const email = localStorage.getItem("email")
    console.log(email, 'email do localstorage')
    console.log(window.location, 'window location')
    if (!email) {
        setTimeout(() => {
            window.location = "/login"
        }, 3000);
    }
    else {
        const user = JSON.parse(localStorage.getItem("user"))
        //user.nome 
        const header = document.querySelector("header")
        header.insertAdjacentHTML("beforeend", `
            <p>Bem vindo de volta ${user.nome}</p>

            `)
    }
}
verificaLogin()