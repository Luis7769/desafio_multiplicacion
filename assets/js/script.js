const ingresarNumero = parseInt(prompt("Ingresa un número del 1 al 20 para realizar operaciones aritméticas"));

const multiplicar = (numero) => {
    let resultado = "";
    if (numero >= 1 && numero <= 20) {
        // Calculo de  multiplicaciones
        for (let i = 1; i <= numero; i++) {
            resultado += i + " x " + numero + " = " + (i * numero) + "<hr>" + "<br>";
        }

        // Cálculo del factorial
        for (let i = 1; i <= numero; i++) {
            let factorial = 1; // Se inicializa el factorial dentro del bucle en 1
            for (let j = 1; j <= i; j++) {
                factorial *= j;
            }
            resultado +=  "El Factorial del " + i + " es: " + factorial + "<hr>" + "<br>"; 
        }
    } else {
        resultado = "Número fuera de rango";
    }
    return resultado;
};

document.write(multiplicar(ingresarNumero));