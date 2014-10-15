var keys = document.querySelectorAll('#calculator span');
var operators = ['+','-','*','/'];
var decimalAddedd = false;
var calculated = false;
var isRadian = false;

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
                case "aln":
                    var s = Math.round(Math.pow(Math.E, inputVal));
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "alog":
                    var s = Math.round(Math.pow(10, inputVal));
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "AC":
                    input.innerHTML = '';
                    decimalAddedd = false;
                    break;
                case "DEG":
                    this.innerHTML = "RAD";
                    isRadian = true;
                    break;
                case "RAD":
                    this.innerHTML = "DEG";
                    isRadian = false;
                    break;
                case "sin":
                    if(isRadian){
                        var s = Math.sin(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.sin(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "asin":
                    if(isRadian){
                        var s = Math.asin(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.asin(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "cos":
                    if(isRadian){
                        var s = Math.cos(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.cos(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "acos":
                    if(isRadian){
                        var s = Math.acos(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.acos(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "tan":
                    if(isRadian){
                        var s = Math.tan(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.tan(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "atan":
                    if(isRadian){
                        var s = Math.atan(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.atan(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "=":
                    var equation = inputVal;
                    var lastChar = equation[equation.length - 1];
                
                    if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
                        equation = equation.replace(/.$/,'');
                    }
                
                    if(equation)
                        input.innerHTML = eval(equation);
                    
                    if((eval(equation)%1 == 0)){
                        decimalAddedd = false;
                    }
                    else{
                        decimalAddedd = true;
                    }
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
                    var s = Math.log(inputVal)/dn;
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "aln":
                    var s = Math.round(Math.pow(Math.E, inputVal));
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "alog":
                    var s = Math.round(Math.pow(10, inputVal));
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "DEG":
                    this.innerHTML = "RAD";
                    isRadian = true;
                    break;
                case "RAD":
                    this.innerHTML = "DEG";
                    isRadian = false;
                    break;
                case "AC":
                    input.innerHTML = '';
                    decimalAddedd = false;
                    break;
                case "sin":
                    if(isRadian){
                        var s = Math.sin(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.sin(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "asin":
                    if(isRadian){
                        var s = Math.asin(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.asin(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "cos":
                    if(isRadian){
                        var s = Math.cos(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.cos(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "acos":
                    if(isRadian){
                        var s = Math.acos(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.acos(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "tan":
                    if(isRadian){
                        var s = Math.tan(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.tan(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "atan":
                    if(isRadian){
                        var s = Math.atan(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.atan(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "=":
                    var equation = inputVal;
                    var lastChar = equation[equation.length - 1];
                
                    if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
                        equation = equation.replace(/.$/,'');
                    }
                
                    if(equation)
                        input.innerHTML = eval(equation);
                    
                    if((eval(equation)%1 == 0)){
                        decimalAddedd = false;
                    }
                    else{
                        decimalAddedd = true;
                    }
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
                    input.innerHTML = btnVal;
            }
            calculated = false;
        }
        
        e.preventDefault();
    }
}
