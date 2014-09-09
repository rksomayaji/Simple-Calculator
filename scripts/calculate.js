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
        
            if(btnVal=='AC'){
                input.innerHTML = '';
                decimalAddedd = false;
            }
            else if(btnVal=='='){
                var equation = inputVal;
                var lastChar = equation[equation.length - 1];
                
                if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
                    equation = equation.replace(/.$/,'');
                }
                
                if(equation)
                    input.innerHTML = eval(equation);
                    
                decimalAddedd = false;
                calculated = true;
            }
            else if(operators.indexOf(btnVal) > -1){
                var lastChar = inputVal[inputVal.length - 1];
                
                if(inputVal != '' && operators.indexOf(lastChar) == -1)
                    input.innerHTML += btnVal;
                
                else if(inputVal == '' && btnVal == '-')
                    input.innerHTML += btnVal;
                    
                if(operators.indexOf(lastChar) > -1 && inputVal.length > 1){
                    input.innerHTML = inputVal.replace(/.$/,btnVal);
                }
                decimalAddedd = false;
            }
            else if(btnVal == '.'){
                if(!decimalAddedd){
                    input.innerHTML += btnVal;
                    decimalAddedd = true;
                }
            }
            else{
                input.innerHTML += btnVal;
            }
        }
        else{
            if(btnVal=='AC'){
                input.innerHTML = '';
                decimalAddedd = false;
            }
            else if(btnVal=='='){
                var equation = inputVal;
                var lastChar = equation[equation.length - 1];
                
                if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
                    equation = equation.replace(/.$/,'');
                }
                
                if(equation)
                    input.innerHTML = eval(equation);
                    
                decimalAddedd = false;
            }
            else if(operators.indexOf(btnVal) > -1){
                var lastChar = inputVal[inputVal.length - 1];
                
                if(inputVal != '' && operators.indexOf(lastChar) == -1)
                    input.innerHTML += btnVal;
                
                else if(inputVal == '' && btnVal == '-')
                    input.innerHTML += btnVal;
                    
                if(operators.indexOf(lastChar) > -1 && inputVal.length > 1){
                    input.innerHTML = inputVal.replace(/.$/,btnVal);
                }
                decimalAddedd = false;
            }
            else if(btnVal == '.'){
                if(!decimalAddedd){
                    input.innerHTML += btnVal;
                    decimalAddedd = true;
                }
            }   
            else{
                input.innerHTML = btnVal;
            }
            calculated = false;
        }
        
        e.preventDefault();
    }
}
