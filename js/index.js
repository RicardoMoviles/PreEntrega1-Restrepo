let montoDeInversion = 126000000;
let interesEfectivoAnual = 11.1;
let meses = 3;
let moneda = "pesos";
let tasaMasAlta = 13;
let mesesMasAlta = 6;
let hora= new Date();
hora = hora.getHours();


function asignarTexto (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function calcularRendimiento(monto, tiempo, interes){
        let rendimientos = ((monto*interes)/100)*((tiempo*30)/360);
        console.log(`El rendimiento de tu inversion es de ${rendimientos} ${moneda}`);
  
    if(interes < tasaMasAlta){
        mejorRendimiento();
    }  
}

function mejorRendimiento(){
    console.log(`Puedes obtener una mejor rentabilidad de tu dinero si abres el CDT a ${mesesMasAlta} meses con una tasa de ${tasaMasAlta}% efectivo anual`);
}

function saludar(horaDelDia){

    if(horaDelDia>=12 && horaDelDia<18){
        console.log("Buenas tardes")
    }else if(horaDelDia >=0 && horaDelDia<12){
        console.log("Buenos días")
    }else{
        console.log("Buenas noches")
    }
    
}

function despedirse(){
    console.log("Gracias por usar el simulador hasta pronto");
}
asignarTexto ('h1','Simulador Rendimientos CDT');
asignarTexto('p', 'Por favor ingresa el valor y los meses a los cuales quieres abrir tu CDT');


for (let i = 0; i < 1; i++) {
    saludar(hora); 
    calcularRendimiento(montoDeInversion,meses,interesEfectivoAnual);
    despedirse();  
}


