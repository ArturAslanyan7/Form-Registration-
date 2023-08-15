let form = document.querySelector('.block')
let nameInput = document.querySelector('#name')
let lastNameInput = document.querySelector('#name2')
let emailInput = document.querySelector('#email')
let paswordInput = document.querySelector('#pasword')
let pasword2Input = document.querySelector('#pasword2')
let Check1 = document.querySelector("#check1")
let Check2 = document.querySelector("#check2")

form.addEventListener('submit', e => {
    e.preventDefault()

    Validation()
    Send()
})

const emailValidation = (email) => {
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase())
}

function NameValidation(){
    let Username = nameInput.value.trim()
    let textName = document.querySelector("#nameP")

    if(Username !== ''){
        textName.innerHTML = 'Username is required'
        nameInput.classList.add("Valide")
        nameInput.classList.remove("Invalide")
        textName.style.color = 'green'
    }else{
        textName.innerHTML = 'Field must be filled'
        nameInput.classList.remove("Valide")
        nameInput.classList.add("Invalide")
        textName.style.color = 'red'
    }
}

function LastNameValidation(){
    let UserSecondName = lastNameInput.value.trim()
    let textLastName = document.querySelector("#lastNameP")

    if(UserSecondName !== ''){
        textLastName.innerHTML = 'Lastname is required'
        lastNameInput.classList.add("Valide")
        lastNameInput.classList.remove("Invalide")
        textLastName.style.color = 'green'
    }else{
        textLastName.innerHTML = 'Field must be filled'
        lastNameInput.classList.remove("Valide")
        lastNameInput.classList.add("Invalide")
        textLastName.style.color = 'red'
    }
}

function EmailValidation(){
    let emailP = document.querySelector("#emailP")
    let UserEmail = emailInput.value.trim()

    if(UserEmail !== ''){
        if(emailValidation(UserEmail) === true){
            emailP.innerHTML = ' Email is required'
            emailInput.classList.add("Valide")
            emailInput.classList.remove("Invalide")
            emailP.style.color = 'green'
        }else{
            emailP.innerHTML = ' Email is not required'
            emailInput.classList.remove("Valide")
            emailInput.classList.add("Invalide")
            emailP.style.color = 'red'
        }
    }else{
        emailP.innerHTML = 'Field must be filled '
        emailInput.classList.remove("Valide")
        emailInput.classList.add("Invalide")
        emailP.style.color = 'red'
    }
}

function Pasw1Validation(){
    let pasP1 = document.querySelector("#pasP1")
    let UserPas1 = paswordInput.value.trim()
    let UserPas2 = pasword2Input.value.trim()
    let pasP2 = document.querySelector("#pasP2")

    if(UserPas1 !== ''){
        if( UserPas1.length >= 8){
            pasP1.innerHTML = ' Password is requert'
            paswordInput.classList.add("Valide")
            paswordInput.classList.remove("Invalide")
            pasP1.style.color = 'green'
        }
        else{
            pasP1.innerHTML = 'Must be at least 8 characters'
            paswordInput.classList.add("Invalide")
            paswordInput.classList.remove("Valide")
            pasP1.style.color = 'red'
        }
    }else{
        pasP1.innerHTML = 'Field must be filled'
        paswordInput.classList.add("Invalide")
        paswordInput.classList.remove("Valide")
        pasP1.style.color = 'red'
    }
}

function Pasw2Validation(){
    let UserPas1 = paswordInput.value.trim()
    let UserPas2 = pasword2Input.value.trim()
    let pasP2 = document.querySelector("#pasP2")

    if(UserPas2 !== ''){
        if(UserPas1 === UserPas2){
            pasP2.innerHTML = 'Password is required'
            pasword2Input.classList.add("Valide")
            pasword2Input.classList.remove("Invalide")
            pasP2.style.color = 'green'
        }else{
            pasP2.innerHTML = 'passwords do not match'
            pasword2Input.classList.add("Invalide")
            pasword2Input.classList.remove("Valide")
            pasP2.style.color = 'red'
        }
    }else{
        pasP2.innerHTML = 'Field must be filled'
        pasword2Input.classList.add("Invalide")
        pasword2Input.classList.remove("Valide")
        pasP2.style.color = 'red'
    }
}

function Check1Validation(){
    let check1P = document.querySelector("#check1P")

    if(Check1.checked !== true){
        check1P.style.color = 'red'
        Check1.classList.add("Invalide")
        Check1.classList.remove("Valide")
    }else{
        check1P.style.color = '#D0D3D4'
        Check1.classList.remove("Invalide")
        Check1.classList.add("Valide")
    }
}

function Check2Validation(){
    let check2P = document.querySelector("#check2P")

    if(Check2.checked !== true){
        check2P.style.color = 'red'
        Check2.classList.add("Invalide")
        Check2.classList.remove("Valide")
    }else{
        check2P.style.color = '#D0D3D4'
        Check2.classList.remove("Invalide")
        Check2.classList.add("Valide")
    }
}

function Validation(){

    NameValidation()

    LastNameValidation()

    EmailValidation()

    Pasw1Validation()

    Pasw2Validation()

    Check1Validation()

    Check2Validation()

}

function Send(){
    let pat = /Valide/
    if(pat.test(String(nameInput.className)) && pat.test(String(lastNameInput.className)) 
    && pat.test(String(emailInput.className)) && pat.test(String(paswordInput.className))
    && pat.test(String(pasword2Input.className)) && pat.test(String(Check1.className)) &&
        pat.test(String(Check2.className))){
            location.reload();
        }

}