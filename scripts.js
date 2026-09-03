const form = document.getElementById("form")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const pwdInput = document.getElementById("pwd")

const nameerror = document.getElementById("nameerror")
const emailerror = document.getElementById("emailerror")
const pwderror = document.getElementById("pwderror")
const message = document.getElementById( "message")

nameInput.addEventListener('blur',()=>{
    if(nameInput.value.trim() === ""){
        nameerror.textContent="Name is Required."
    }
    else{
        nameerror.textContent = " "
    }
})

emailInput.addEventListener('blur',()=>{
    if(!emailInput.value.includes('@')){
        emailerror.textContent="Enter a valid email address."
    }
    else{
        emailerror.textContent = " "
    }
})

pwdInput.addEventListener('blur',()=>{
    const password = pwdInput.value
    const number = /[0-9]/.test(password)
    const capital = /[A-Z]/.test(password)
    const specialchar = /[!@#$%^&*]/.test(password)

    if(password.length<6){
        pwderror.textContent = "password must be more than 6."
    }
    else if(! number){
         pwderror.textContent = "atlestd one number is requried."
    }
    else if(!capital){
         pwderror.textContent = "atlestd one capital is requried."
    }
    else if(!specialchar){
         pwderror.textContent = "atlestd one specialchar is requried."
    }
    else{
        pwderror.textContent=""
    }
})

form.addEventListener('submit',function(e){
    e.preventDefault()

    const nameValid= nameInput.value.trim() !== ""
    const emailValid= emailInput.value.includes('@')
    const password = pwdInput.value
    const number = /[0-9]/.test(password)
    const capital = /[A-Z]/.test(password)
    const specialchar = /[!@#$%^&*]/.test(password)
    const passwordValid = password.length>=6 && number && capital && specialchar

    if(!nameValid || !emailValid || !passwordValid){
        message.textContent = ""
        alert("Please fix  the error before submitting.")
    }

    else{
        message.textContent = "Registration successful!..................."
        form.reset()
    }

})