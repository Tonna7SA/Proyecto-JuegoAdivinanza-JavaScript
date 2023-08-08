// El programa elije un numero al azar entre 1 y 100

let numeroAzar = Math.floor(Math.random() * 100) + 1

// Tomamos el numero ingresado por el usuario, para comparar

let numeroEntrada = document.getElementById('numeroEntrada')

// Mensaje que vamos a poner en el HTML, de acuerdo a lo que suceda

let mensaje = document.getElementById('mensaje')

// Cantidad de intentos para adivinar
let intento = document.getElementById('intento')

let intentos = 0

// Funcion para que se va a ejecutar cuando clickemos el boton chequear
function chequearResultado() {
    intentos ++ 
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    // isNaN = no es un numero
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, ingresa un numero entre 1 y 100'
        mensaje.style.color = 'black'
        return
    }

    // Acerto el numero
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'ADIVINASTE EL NUMERO !!!!'
        mensaje.style.color= 'green'
        numeroEntrada.disabled = true

    // Si el numero elejido es mas bajo que el que hay que adivinar   
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'El numero es mas alto, que el que pusite...'
        mensaje.style.color = 'red'
    
    // Sie el numero elejido es mas alto que el que hay que adivinar
    }else{
        mensaje.textContent = 'El numero es mas bajo, que el que pusite...'
        mensaje.style.color = 'red'
 
    }
}
