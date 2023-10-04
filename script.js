let num1;
let num2;
let operator;
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(num1,num2,operator){
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
    }
}
let display=document.querySelector('#display');
display.textContent="";
let buttons=document.querySelectorAll('button');
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        let buttonText=button.textContent;
        switch(buttonText){
            case '1':
                display.textContent+='1';
            case '2':
                display.textContent+='2';
            case '3':
                display.textContent+='3';
            case '4':
                display.textContent+='4';
            case '5':
                display.textContent+='5';
            case '6':
                display.textContent+='6';
            case '7':
                display.textContent+='7';    
            case '8':
                display.textContent+='8';
            case '9':
                display.textContent+='9';
            case '+':
                display.textContent+='+';
            case '-':
                display.textContent+='-';
            case '*':
                display.textContent+='*';
            case '/':
                display.textContent+='/';
            case '.':
                display.textContent+='.';
            

        }
    })
})