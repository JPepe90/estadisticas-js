const PlatziMath = {};

// Metodo para el calculo de promedio a partir de un array de numeros
PlatziMath.calcularPromedio = function calcularPromedio(array){
    const sumatoria = array.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);
    return (sumatoria / (array.length))
}

// Detectar si una lista es par
PlatziMath.esPar = function esPar(array) {
    return !(lista.length % 2);
}
// Detectar si una lista es impar
PlatziMath.esImpar = function esImpar(array) {
    return (array.length % 2);
}

// Metodo para calcular la media de cualquier tipo de lista
PlatziMath.calcularMediana = function calcularMediana(arrayDesordenado) {
    const array = PlatziMath.ordenarLista(arrayDesordenado);
    // detecto si la lista es par o impar
    if (PlatziMath.esImpar(array)) {
        // tomo el valor del item central redondeado para abajo. Ej si array length = 7 --> recorto 3.5 a 3
        return array[Math.trunc(array.length/2)];
    } else {
        // agarro los dos items del centro y les calculo el promedio
        return PlatziMath.calcularPromedio([array[(array.length/2)-1], array[(array.length/2)]]);
    }
}

PlatziMath.ordenarLista = function ordenarLista(array) {
    const listaOrdenada = array.sort((a,b) => a-b); // con arrow PlatziMath. = function
    return listaOrdenada;
}

// Metodo para calcular la moda de cualquier lista
PlatziMath.calcularModa = function calcularModa(arrayDesordenado) {
    const array = PlatziMath.ordenarLista(arrayDesordenado);
    const arrayRepeticiones = [];
    let valorAcumulado = array[0];
    let repeticion = 0;
    for (item of array) {
        if (item === valorAcumulado) {
            repeticion++;
        } else {
            arrayRepeticiones.push({ valor: valorAcumulado, repeticiones: repeticion});
            valorAcumulado = item;
            repeticion = 1;
        }
    }

    arrayRepeticiones.sort((valorAnterior, nuevoValor) => {nuevoValor.repeticiones - valorAnterior.repeticiones});

    return arrayRepeticiones[0];
}
