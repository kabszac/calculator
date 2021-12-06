let previousText = document.querySelector('.previous')
let currentText = document.querySelector('.current')
const numberBtn = document.querySelectorAll('.num')
const operatorBtn = document.querySelectorAll('.operation') 
const delBtn = document.querySelector('.delete')
const equalBtn = document.querySelector('.equals')
const clearBtn = document.querySelector('.clear')

let currentOperand = ""
let previousOperand = ""
let operation = undefined


function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function mutiply(a,b){
    return a*b
}

function divide(a,b){
    if (b === 0){
        return " Oops darling, undefined"
    }
    else{
        return a/b
    }
}

//console.log(add(8.5,11.5))

function operates(operator, a, b){
    switch(operator){
        case '+':
            return add(a,b)
            break
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return mutiply(a, b)
            break;
        case '÷':
            return divide(a,b)
            break;
    }    
}

function BtnClick() {
    numberBtn.forEach(btn =>{
        btn.addEventListener('click', ()=> {
            // make sure there is only one . 
            if(btn.textContent === '.' && currentOperand.includes('.'))return
            currentOperand += btn.textContent.toString()
            updateDisplay()
        })
    })

    operatorBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            currentOperand === "Oops darling, undefined" ? currentOperand = '' : ''
            currentOperand === 0 ? currentOperand = " " : '';
            if(currentOperand === "")return
            operation = btn.textContent
            operate()
            updateDisplay()
        })
    })

    delBtn.addEventListener('click', () => {
        let temp
        if(currentOperand ===  "Oops darling, undefined") {
            currentOperand = 1
            temp = currentOperand
            updateDisplay()
        }else {
            temp = currentOperand.toString().slice(0, -1)
        }
        if(temp === '' || temp === 0 ) {
            temp = 0 
            currentOperand = temp
            updateDisplay()
       } else {
            currentOperand = parseFloat(temp)
            updateDisplay()
       }
     
    })


    equalBtn.addEventListener('click', () => {
        calculateResults() 
        updateDisplay()     
    })

    clearBtn.addEventListener('click', () => {
        currentOperand = 0
        previousOperand = ""
        operation = undefined
        updateDisplay()
    })
}

BtnClick()

function updateDisplay(){
    currentText.textContent = currentOperand
    previousText.textContent = previousOperand
}

function operate() {
    if(currentOperand === ' ') return
    if(previousOperand !== ' ') {
        calculateResults()
    }
    previousOperand = `${currentOperand} ${operation}`
    currentOperand = ' '
}

function calculateResults(){
    const curr = parseFloat(currentOperand)
    const prev = parseFloat(previousOperand)
    if( isNaN(prev)  ||  isNaN(curr) ) return 
    results = operates(operation, prev, curr)

    currentOperand = results
    previousOperand = ""
    operation = undefined
}


