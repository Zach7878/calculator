let num1;
let num2;
let operator;
let operatorRegex=/[+-/*]/
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
            return add(+num1,+num2);
        case '-':
            return subtract(+num1,+num2);
        case '*':
            return multiply(+num1,+num2);
        case '/':
            return divide(+num1,+num2);
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
                break;
            case '2':
                display.textContent+='2';
                break;
            case '3':
                display.textContent+='3';
                break;
            case '4':
                display.textContent+='4';
                break;
            case '5':
                display.textContent+='5';
                break;
            case '6':
                display.textContent+='6';
                break;
            case '7':
                display.textContent+='7';  
                break;  
            case '8':
                display.textContent+='8';
                break;
            case '9':
                display.textContent+='9';
                break;
            case '+':
                display.textContent+='+';
                break;
            case '-':
                display.textContent+='-';
                break;
            case '*':
                display.textContent+='*';
                break;
            case '/':
                display.textContent+='/';
                break;
            case '.':
                display.textContent+='.';
                break;
            case '=':
                let parts=display.textContent.split(/([+-/*])/);
                num1=parts[0]
                for(let i=0;i<parts.length-1;i=i+2){
                    num2=parts[i+2]
                    operator=parts[i+1]
                    num1=operate(num1,num2,operator);
                    alert(num1);
                }
                    

        }
    })
})