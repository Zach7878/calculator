let num1;
let num2;
let operator;
let result;
let operatorRegex=/[+-/*]/
let displayString;
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
                displayString=display.textContent;
                if(displayString.charAt(displayString.length-1)!=='+'&&displayString.charAt(displayString.length-1)!=='-'&&displayString.charAt(displayString.length-1)!=='*'&&displayString.charAt(displayString.length-1)!=='/'&&displayString!==''){
                    display.textContent+='+';
                }
                break;
            case '-':
                displayString=display.textContent;
                if(displayString==''){
                    display.textContent+='-';
                }
                else if(displayString.charAt(displayString.length-1)!=='-'){
                    display.textContent+='-';
                }
                break;
            case '*':
                displayString=display.textContent;
                if(displayString.charAt(displayString.length-1)!=='+'&&displayString.charAt(displayString.length-1)!=='-'&&displayString.charAt(displayString.length-1)!=='*'&&displayString.charAt(displayString.length-1)!=='/'&&displayString!==''){
                    display.textContent+='*';
                }
                break;
            case '/':
                displayString=display.textContent;
                if(displayString.charAt(displayString.length-1)!=='+'&&displayString.charAt(displayString.length-1)!=='-'&&displayString.charAt(displayString.length-1)!=='*'&&displayString.charAt(displayString.length-1)!=='/'&&displayString!==''){
                    display.textContent+='/';
                }
                break;
            case '.':
                display.textContent+='.';
                break;
            case '=':
                let parts=display.textContent.split(/([+\-/*])/).filter(part => part !== "");
                if(parts[0]=="-"){
                    parts.splice(0,2,parts[1]*-1)
                }
                num1=parts[0]
                let operatorAmount=0;
                for (let i=0;i<parts.length;i++){
                    if(parts[i]==='+'||parts[i]==='-'||parts[i]==='*'||parts[i]==='/'){
                        operatorAmount++;
                    }
                }
                for(let i=0;i<operatorAmount;i++){
                    if(parts.indexOf('*')!==-1){
                        if(parts[parts.indexOf('*')+1]=="-"){
                            operatorAmount--;
                            parts.splice(parts.indexOf('*')+1,2,parts[parts.indexOf('*')+2]*-1)
                        }
                        result=operate(parts[parts.indexOf('*')-1],parts[parts.indexOf('*')+1],'*')
                        parts.splice(parts.indexOf('*')-1,3,result)
                    }
                    else if(parts.indexOf('/')!==-1){
                        if(parts[parts.indexOf('/')+1]=="-"){
                            operatorAmount--;
                            parts.splice(parts.indexOf('/')+1,2,parts[parts.indexOf('/')+2]*-1)
                        }
                        result=operate(parts[parts.indexOf('/')-1],parts[parts.indexOf('/')+1],'/')
                        parts.splice(parts.indexOf('/')-1,3,result)
                    }
                    else if(parts.indexOf('+')!==-1){
                        if(parts[parts.indexOf('+')+1]=="-"){
                            operatorAmount--;
                            parts.splice(parts.indexOf('+')+1,2,parts[parts.indexOf('+')+2]*-1)
                        }
                        result=operate(parts[parts.indexOf('+')-1],parts[parts.indexOf('+')+1],'+')
                        parts.splice(parts.indexOf('+')-1,3,result)
                    }
                    else if(parts.indexOf('-')!==-1){
                        result=operate(parts[parts.indexOf('-')-1],parts[parts.indexOf('-')+1],'-')
                        parts.splice(parts.indexOf('-')-1,3,result)
                    }
                    else{
                        alert("invalid input :(");
                    }
                }
                display.textContent=result;
                break;
            case 'Delete':
                display.textContent=display.textContent.slice(0,-1);
                break;
            case 'Clear':
                display.textContent='';
        }

    })
})