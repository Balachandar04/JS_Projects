let calculation = '';
let numButtonElements = document.querySelectorAll('.js-button');
let boxElement = document.querySelector('.js-text-box');
let signElements = document.querySelectorAll('.sign-button');
let equalButton = document.querySelector('.equal-button');
let clearButton = document.querySelector('.clear-button');
let dotButton = document.querySelector('.dot-button');
let modButton = document.querySelector('.mod-button');
let powerButton = document.querySelector('.power-button');
let signChangeButton = document.querySelector('.sign-change-button');
let bodyElement = document.querySelector('body');
let arrayButtons = ['0','1','2','3','4','5','6','7','8','9','0']

numButtonElements.forEach((button)=>{button.addEventListener('click',(event)=>{
    calculation+=button.innerHTML; 
    boxElement.value=calculation;
})
})

signElements.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        calculation += ` ${button.innerHTML} `;
        boxElement.value=calculation;
    })
})

equalButton.addEventListener('click',(event)=>{
    boxElement.value=eval(calculation);
    calculation = boxElement.value;
})

clearButton.addEventListener('click',(event)=>{
    calculation = '';
    boxElement.value=calculation;
})

dotButton.addEventListener('click',(event)=>{
    calculation+=".";
    boxElement.value= calculation;
})

powerButton.addEventListener('click',(event)=>{
    calculation += powerButton.value;
    boxElement.value = calculation;
})

signChangeButton.addEventListener('click',(event)=>{
    calculation = -1 * eval(calculation) || '-';
   
    boxElement.value = String(calculation);
})

bodyElement.addEventListener('keydown',(event)=>{
    if(event.key = 'Backspace'){
        event.preventDefault();
        let splitString = calculation.split('');
        let popChar = splitString.pop();
        if(popChar ===' '){splitString.pop();}
        let newString = splitString.join('');
        calculation = newString;
        boxElement.value=calculation;
        
    }
    else if(event.key == '1' ){
        calculation+=button.innerHTML; 
        boxElement.value=calculation;        
    }
})
