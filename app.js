// All Selector 
let formEl = document.querySelector('form')
let inputEl = document.querySelector('#input')
let outputEl = document.querySelector('#output')
let switchEl = document.querySelector('.switch')
let title = document.querySelector('.title')

// Switch 
switchEl.addEventListener('click', function (e) {
    let type = e.target.getAttribute('data-type')
    inputEl.value = ''
    outputEl.innerText = ''
    if (type == 'binary') {
        e.target.setAttribute('data-type', 'text')
        inputEl.setAttribute('data-type', 'text')
        inputEl.placeholder = "Enter Your Plain Text"
        outputEl.innerText = 'Binary Output'
        title.innerText = 'Text To Binary'
    }
    else {
        e.target.setAttribute('data-type', 'binary')
        inputEl.setAttribute('data-type', 'binary')
        inputEl.placeholder = "Enter Binary Code"
        outputEl.innerText = 'Text Output'
        title.innerText = 'Binary To Text'
    }
})

// Submit Event 
formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputValue = e.target.input.value
    let inputType = e.target.input.getAttribute('data-type')
    convert(inputValue, inputType)

})

// Convert  
function convert(value, type) {

    if (type === 'binary') {
        output = binaryToText(value)
    }
    else if (type === 'text') {
        output = textToBinary(value)
    }
    outputEl.innerText = output
}


// Binary to Text 
function binaryToText(input) {
    let output = '';
    output = input.split(" ")
        .map(number => parseInt(number, 2))
        .map(number => String.fromCharCode(number)).join('')

    return output
}

// Text To Binary 

function textToBinary(input) {
    let output = ''
    output = input.split('').map(latter=> {
        return latter.charCodeAt(0)
    }).map(latter => {
        return latter.toString(2)
    }).join(' ')
    
    return output
    
}

// Copy To CLipboard 
let copy = document.querySelector('.copy')
copy.addEventListener('click',()=>{
    let textarea =  document.createElement('textarea')
    let copied = outputEl.innerText
    textarea.value = copied
    document.body.appendChild(textarea);
    textarea.select()
    document.execCommand('copy');
    alert('Copied')
    document.body.removeChild(textarea)
})