// Déclarations des variables
const btnPassword = document.querySelector('#btn-password')
const inputPassword = document.querySelector('#input-password')

const btnConfirmPassword = document.querySelector('#btn-confirmPassword')
const inputConfirmPassword = document.querySelector('#input-confirmPassword')

const information = document.querySelector('#information')

const btnChangePassword = document.querySelector('#btn-change-password')

// Déclaration des regex ******************************
let regexNum = /[0-9]/
let regexCar = /[!?-@*$]/
let regexMin = /[a-z]/
let regexMaj = /[A-Z]/

// ******************************************************
// bouton show password *********************************
// ******************************************************

btnPassword.addEventListener('mousedown', function () {
    inputPassword.type = 'text'
})

btnPassword.addEventListener('mouseup', function () {
    inputPassword.type = 'password'
})

btnPassword.addEventListener('mouseout', function () {
    inputPassword.type = 'password'
})

// ******************************************************
// bouton show confirm password *************************
// ******************************************************
btnConfirmPassword.addEventListener('mousedown', function () {
    inputConfirmPassword.type = 'text'
})

btnConfirmPassword.addEventListener('mouseup', function () {
    inputConfirmPassword.type = 'password'
})
btnConfirmPassword.addEventListener('mouseout', function () {
    inputConfirmPassword.type = 'password'
})

function verifyPassword() {
    let valueInputPassword = inputPassword.value
    let valueInputConfirmPassword = inputConfirmPassword.value

    if (valueInputPassword === valueInputConfirmPassword) {
        information.innerHTML = 'Le mot de passe a bien été changé'
        information.classList.remove('danger')
        information.classList.add('validate')
    } else {
        information.innerHTML = 'les mots de passe ne sont pas identiques'
        information.classList.remove('validate')
        information.classList.add('danger')
    }
}

// Appel de la fonction au click sur le bouton
btnChangePassword.addEventListener('click', function () {
    verifyPassword()
})

// Eléments input du html *******************
// lorsque que les éléments récupère le focus, nous effaçons le message d'information
inputPassword.addEventListener('focus', function () {
    information.innerHTML = ''
})

inputConfirmPassword.addEventListener('focus', function () {
    information.innerHTML = ''
})

function testStrengthPassword(password) {

    // test la longueur
    if (password.length >= 8) {
        let spanTot = document.querySelector('#spanTot')
        spanTot.style.color = 'red'
    } else {
        spanTot.style.color = 'black'
    }

    if (password.match(regexCar)) {
        let spanCar = document.querySelector('#spanCar')
        spanCar.style.color = 'red'
    } else {
        spanCar.style.color = 'black'
    }

    if (password.match(regexNum)) {
        let spanNum = document.querySelector('#spanNum')
        spanNum.style.color = 'red'
    } else {
        spanNum.style.color = 'black'
    }

    if (password.match(regexMin) && password.match(regexMaj)) {
        let spanMin = document.querySelector('#spanMin')
        spanMin.style.color = 'red'
    } else {
        spanMin.style.color = 'black'
    }
}

function numberStrengthPassword(password) {

    let strengthNumber = 0

    // test la longueur
    if (password.length >= 8) {
        strengthNumber++
    }

    if (password.match(regexCar)) {
        strengthNumber++
    }

    if (password.match(regexNum)) {
        strengthNumber++
    }

    if (password.match(regexMin) && password.match(regexMaj)) {
        strengthNumber++
    }

    return strengthNumber
}

inputPassword.addEventListener('input', function () {
    testStrengthPassword(inputPassword.value)

    let strength = document.querySelector('#strength')
    let numberPassword = numberStrengthPassword(inputPassword.value)

    switch (numberPassword) {
        case 1:
            strength.innerHTML = 'faible'
            break
        case 2:
            strength.innerText = 'moyen'
            break
        case 3:
            strength.innerText = 'fort'
            break
        case 4:
            strength.innerText = 'puissant'
            break
        default:
            strength.innerText = ''
    }

})


