// Metodo para el calculo de promedio a partir de un array de numeros
function calcularPromedio(array){

    // metodo 1
    // let sumatoria = 0;
    // for (item of array) {
    //     sumatoria+= item;
    // }

    // metodo 2
    // const sumatoria = array.reduce(function sumarElementos(valorAcumulado, nuevoValor){
    //     return valorAcumulado + nuevoValor;        
    // });

    // metodo 3 --> arrow function
    // const sumarElementos = (valorAcumulado, nuevoValor) => { 
    //     return valorAcumulado + nuevoValor 
    // };
    // o se puede escribir lo mismo si es en una unica linea de la siguiente manera
    // const sumarElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
    
    const sumatoria = array.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);

    return (sumatoria / (array.length))
}

function esPar(array) {
    // if (array.length % 2) {
    //     return false;
    // } else {
    //     return true;
    // }
    return !(lista.length % 2);
}

function esImpar(array) {
    return (array.length % 2);
}

function calcularMediana(array) {
    // detecto si la lista es par o impar
    if (esImpar(array)) {
        // tomo el valor del item central redondeado para abajo. Ej si array length = 7 --> recorto 3.5 a 3
        return array[Math.trunc(array.length/2)];
    } else {
        // agarro los dos items del centro y les calculo el promedio
        return calcularPromedio([array[(array.length/2)-1], array[(array.length/2)]]);
    }
}