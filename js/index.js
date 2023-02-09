const btn = document.querySelectorAll("#numero");
const principal = document.getElementById("primero");
const secund = document.getElementById("superior");
const simbolo = document.querySelectorAll("#simbolos");
const operacion = document.getElementById("operacion");

let simboloOperacion = "";
let primero = "";
let segundo = "";
let segundoValor="";

btn.forEach((item)=>{
    item.addEventListener("click", ()=>{
        if(principal.value.length < 14){
            principal.value=principal.value + item.value;
        }
    });
});

simbolo.forEach((item)=>{
    item.addEventListener("click",()=>{
        primero = principal.value;
        principal.value = "";
        simboloOperacion =  item.value;
        operacion.value = simboloOperacion;
        secund.value= primero;
    });
});


function limpiar(){
    operacion.value = "";
    principal.value = "";
    secund.value = "";
}

function resultado(){
    segundo = principal.value;
    secund.value = primero + " " +simboloOperacion+ " " + segundo;
    operacion.value = "";
    calcular();
}

function calcular(){
    let result;
    switch(simboloOperacion){
        case "+":
            result = parseInt(primero) + parseInt(segundo);
            principal.value = result;
            break;
        case "-":
            result = parseInt(primero) - parseInt(segundo);
            principal.value = result;
            break;
        case "/":
            result = parseInt(primero) / parseInt(segundo);
            principal.value = result;
            break;
        case "X":
            result = parseInt(primero) * parseInt(segundo);
            principal.value = result;
            break;
        case "%":
            result = parseInt(primero) % parseInt(segundo);
            principal.value = result;
            break;
    }
}
function reducir(){
    
    
    primero = principal.value.substr(0,principal.value.length-1);
    principal.value = primero;
}
