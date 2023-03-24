//initialize AOS

//declare variables
const contactForm = document.getElementById('formId')
const firstInput = document.getElementById('inputfirstname')
const secInput = document.getElementById('inputlastname')
const emailInput = document.getElementById('inputEmail')
const subInput = document.getElementById('inputsubject')
const msg = document.getElementById('message')
const btn = document.getElementById('btn')
const errMsg1 = document.getElementById('firstNameErr')
const errMsg2 =document.getElementById('lastNameErr')
const errMsg3 = document.getElementById('emailErr')
const errMsg4 = document.getElementById('subjErr')
const errMsg5 = document.getElementById('msgErr')
const successMsg = document.getElementById('msg-cont')
const lbl = document.getElementsByClassName('form-label')
const inputs = document.getElementsByClassName('fields')
const input = document.getElementsByClassName('form-control')

lblArray = Array.from(lbl)
inputArray = Array.from(inputs)
inputsArray = Array.from(input)

//add eventlistner to button
btn.addEventListener('click', (e)=>{
    e.preventDefault()
       
    if (firstInput.value === '') {
        errMsg1.textContent = 'Firstname is required'
        firstInput.classList.remove('hover')
        firstInput.classList.add('error')

        lblArray[0].style.color = 'red'
        
        
    }
   
    if (secInput.value === '') {
        errMsg2.textContent = 'Lastname is required'
        secInput.classList.remove('hover')
        secInput.classList.add('error')
        lblArray[1].style.color = 'red'

    }
    if (!emailInput.value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)) {
        errMsg3.textContent = 'Valid Email is required'
        emailInput.classList.remove('hover')
        emailInput.classList.add('error')
        lblArray[2].style.color = 'red'
    }
    if (subInput.value === '') {
        errMsg4.textContent = 'Subject is required'
        subInput.classList.remove('hover')
        subInput.classList.add('error')
        lblArray[3].style.color = 'red'
    }
    if (msg.value === '') {
        errMsg5.textContent = 'Message is required'
        msg.classList.remove('hover')
        msg.classList.add('error')
        lblArray[4].style.color = 'red'
    }
    else{
        lblArray.forEach( idx =>{
            idx.style.color = 'green'
        })
        firstInput.classList.remove('hover')
        secInput.classList.remove('hover')
        emailInput.classList.remove('hover')
        subInput.classList.remove('hover')
        msg.classList.remove('hover')
        firstInput.classList.add('success')
        secInput.classList.add('success')
        emailInput.classList.add('success')
        subInput.classList.add('success')
        msg.classList.add('success')
        
        successMsg.style.display = 'block'
        inputsArray.forEach(item => {
            console.log(item);
            item.disabled = true
        });

        
    }

})