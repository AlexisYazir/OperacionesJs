//Alexis Yazir Hernandez Hipolito 3 D..
function operacion(operador) {
    let num1 = parseFloat(document.getElementById('numero1').value) || 0;
    let num2 = parseFloat(document.getElementById('numero2').value) || 0;
    let resultado;

    switch(operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if(num2 !== 0){
                resultado = num1 / num2;
            } else {
                document.getElementById('res').innerHTML = "No se puede dividir entre cero";
                return;
            }
            break;
            default:
                resultado = 0;
        break;
    }

    document.getElementById('res').textContent = resultado;
}




