
// Función que se llamada desde imc.html al hacer click en el botón enviar
function imc(){
    let valor_imc=0; // Guarda el índice de masa corporal según los datos ingresados
    let peso = document.getElementById("peso").value;
    let altura = (document.getElementById("altura").value); // Obtengo el valor del input HTML
    
    // Validación del peso
    if (peso<1 || peso>150) {
        alert("ERROR. El peso no es correcto. Vuelve a ingresar...");
        window.location.reload();
    }

    // Validación de la altura
    if (altura<20 || altura>220) {
        alert("ERROR. La altura no es correcta. Vuelve a ingresar...");
        window.location.reload();
    }

    // Calculo del IMC
    if ((altura>=1 && peso<=150)&&(altura>=20 && altura<=220)) {
        altura = altura/100
        valor_imc = peso/(altura*altura);
    }

    // Imprimo el resultado en un párrafo HTML
    document.getElementById("consola_imc").innerHTML = `Tu índice de masa corporal es: <br>${(valor_imc).toFixed(2)}`;
}


// Función que se llamada desde fcm.html al hacer click en el botón enviar
function fcm(){
    const edad = document.getElementById("edad").value; // Obtengo el valor del input HTML
    const hombre = document.getElementById("hombre"); // NO uso "value" porque comprobaré el HTML completo ...
    const mujer = document.getElementById("mujer"); // ... en busca de la etiqueta "checked"
    let valor_fcm=0; // Guarda la frecuencia cardiaca  según los datos ingresados

    // Validación de la edad
    if (edad<1 || edad>100) {
        alert("ERROR. La edad no es correcta. Vuelve a ingresar...");
        window.location.reload();
    }

    // Si en el HTML está la etiqueta "checked" se hace el cálculo de la FCM
    if (hombre.checked) {
        valor_fcm = 220 - edad;
        fcm_rangos(valor_fcm);
    }

    if (mujer.checked) {
        valor_fcm = 226 - edad;
        fcm_rangos(valor_fcm);
    }

    // Imprimo el resultado en un párrafo HTML
    document.getElementById("consola_fcm").innerHTML = `Tu frecuencia cardiaca máxima es: <br>${(valor_fcm).toFixed(2)}`;

}


/* Función usada por la función fcm(). Se encarga de imprimir valores en una tabla HTML
Según la edad y el género se obtienen rangos direntes, por lo que hace falta adaptar los rangos de forma dinámica*/
function fcm_rangos(valor_fcm){
    // Inicio por porcentaje de los rangos
    let num1=0.60;
    let num2=0.70;

    for (let i=1; i<=4; i++) { // 4 porque solo hay 4 rangos
        document.getElementById("rango"+i).innerHTML = `${(valor_fcm*num1).toFixed(0)} - ${(valor_fcm*num2).toFixed(0)}`;
        num1 = num2;
        num2 += 0.10; // Los rangos para todos siempre van de 10% en 10%
    }

}

// Función que se llamada desde categoria.html al hacer click en el botón enviar
function categoria(){

    let edad = document.getElementById("year_nac").value; //Obtengo el valor del input HTML
    
    // La idea es que a medida que pasan los años, se vayan actualizando los rangos
    let year_top = 2024;
    let year_down = 1924;

    // Validación de la fecha de nacimiento
    if (edad>=year_down && edad<=year_top) {
        edad = year_top - edad; // Si es válida se la restamos al año actual y obtenemos su EDAD
    }else {
        alert("ERROR. El año de nacimiento no es correcto. Vuelve a ingresar...");
        window.location.reload();
    }

    // Según la edad que tenga imprimo en un párrafo HTML su categoría
    if (edad>0 && edad<=13) {
        document.getElementById("consola_cate").innerHTML = "Tu categoría es: <br>Niño";
    }else if (edad>=14 && edad<=17) {
        document.getElementById("consola_cate").innerHTML = "Tu categoría es: <br>Adolescente";
    }else if (edad>=18 && edad<=35) {
        document.getElementById("consola_cate").innerHTML = "Tu categoría es: <br>Adulto Jóven";
    }else if (edad>=36 && edad<=64){
        document.getElementById("consola_cate").innerHTML = "Tu categoría es: <br>Adulto";
    }else {
        document.getElementById("consola_cate").innerHTML = "Tu categoría es: <br>Tercera Edad";
    }
}