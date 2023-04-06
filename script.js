const inputEmail = document.querySelector("#input-button input")
const emailPattern = new RegExp(inputEmail.pattern)
const button = document.querySelector("#input-button button")

const emails = []

button.addEventListener("click", (event) => {
  const newEmail = inputEmail.value
  const emailAlreadyExists = emails.includes(newEmail)
  const invalidEmail = !emailPattern.test(newEmail)

  if (invalidEmail) {
    alert("🟥 Por favor, insira um endereço de e-mail válido!")
  } else if (emailAlreadyExists) {
    alert("🟥 Este e-mail já foi adicionado!")
    inputEmail.value = ""
  } else {
    function addEmail() {
      emails.push(newEmail)
      alert("🟩 E-mail adicionado com sucesso!")
      inputEmail.value = ""
    }
    addEmail()
  }

  event.preventDefault()
})
