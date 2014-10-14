var keys = document.querySelectorAll('#calculator span');
var operators = ['+','-','*','/'];
var decimalAddedd = false;
var calculated = false;

for (var i=0;i<keys.length; i++) {
    keys[i].onclick = function(e) {
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;
        
        if(!calculated){
            switch (btnVal) {
                case "sq":
                    var s = Math.pow(inputVal, 2);
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "sqrt":
                    var s = Math.pow(inputVal, 1/2);
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "ln":
                    var s = Math.log(inputVal)
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "log":
                    var dn = Math.log(10);
                    var s = Math.log(inputVal)/dn
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "AC":
                    input.innerHTML = '';
                    decimalAddedd = false;
                    break;
                case "=":
                    var equation = inputVal;
                    var lastChar = equation[equation.length - 1];
                
                    if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
                        equation = equation.replace(/.$/,'');
                    }
                
                    if(equation)
                        input.innerHTML = eval(equation);
                    
                    decimalAddedd = false;
                    calculated = true;
                    break;
                case "+":
                case "-":
                case "*":
                case "/":
                    var lastChar = inputVal[inputVal.length - 1];
                
                    if(inputVal != '' && operators.indexOf(lastChar) == -1)
                        input.innerHTML += btnVal;
                    
                    else if(inputVal == '' && btnVal == '-')
                        input.innerHTML += btnVal;
                        
                    if(operators.indexOf(lastChar) > -1 && inputVal.length > 1){
                        input.innerHTML = inputVal.replace(/.$/,btnVal);
                    }
                    decimalAddedd = false;
                    break;
                case ".":
                    if(!decimalAddedd){
                        input.innerHTML += btnVal;
                        decimalAddedd = true;
                    }
                    break;
                default:
                    input.innerHTML += btnVal;
            }
        }
        else{
            switch (btnVal) {
                case "sq":
                    var s = Math.pow(inputVal, 2);
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "sqrt":
                    var s = Math.pow(inputVal, 1/2);
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "ln":
                    var s = Math.log(inputVal)
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "log":
                    var dn = Math.log(10);
                    var s = Math.log(inputVal)/dn
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "AC":
                    input.innerHTML = '';
                    decimalAddedd = false;
                    break;
                case "=":
                    var equation = inputVal;
                    var lastChar = equation[equation.length - 1];
                
                    if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
                        equation = equation.replace(/.$/,'');
                    }
                
                    if(equation)
                        input.innerHTML = eval(equation);
                    
                    decimalAddedd = false;
                    calculated = true;
                    break;
                case "+":
                case "-":
                case "*":
                case "/":
                    var lastChar = inputVal[inputVal.length - 1];
                
                    if(inputVal != '' && operators.indexOf(lastChar) == -1)
                        input.innerHTML += btnVal;
                    
                    else if(inputVal == '' && btnVal == '-')
                        input.innerHTML += btnVal;
                        
                    if(operators.indexOf(lastChar) > -1 && inputVal.length > 1){
                        input.innerHTML = inputVal.replace(/.$/,btnVal);
                    }
                    decimalAddedd = false;
                    calculated = true;
                    break;
                case ".":
                    if(!decimalAddedd){
                        input.innerHTML += btnVal;
                        decimalAddedd = true;
                    }
                    break;
                default:
                    input.innerHTML = btnVal;
            }
            calculated = false;
        }
        
        e.preventDefault();
    }
}
