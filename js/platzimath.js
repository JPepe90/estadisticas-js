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
    const array = ordenarLista(arrayDesordenado);
    // detecto si la lista es par o impar
    if (esImpar(array)) {
        // tomo el valor del item central redondeado para abajo. Ej si array length = 7 --> recorto 3.5 a 3
        return array[Math.trunc(array.length/2)];
    } else {
        // agarro los dos items del centro y les calculo el promedio
        return calcularPromedio([array[(array.length/2)-1], array[(array.length/2)]]);
    }
}

PlatziMath.ordenarLista = function ordenarLista(array) {
    const listaOrdenada = array.sort((a,b) => a-b); // con arrow PlatziMath. = function
    return listaOrdenada;
}

// Metodo para calcular la moda de cualquier lista
PlatziMath.calcularModa = function calcularModa(arrayDesordenado) {
    const array = ordenarLista(arrayDesordenado);
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

// ------------------------------------------------------------------------------------------

// // Metodo para el calculo de promedio a partir de un array de numeros
// function calcularPromedio(array){

//     // metodo 1
//     // let sumatoria = 0;
//     // for (item of array) {
//     //     sumatoria+= item;
//     // }

//     // metodo 2
//     // const sumatoria = array.reduce(function sumarElementos(valorAcumulado, nuevoValor){
//     //     return valorAcumulado + nuevoValor;        
//     // });

//     // metodo 3 --> arrow function
//     // const sumarElementos = (valorAcumulado, nuevoValor) => { 
//     //     return valorAcumulado + nuevoValor 
//     // };
//     // o se puede escribir lo mismo si es en una unica linea de la siguiente manera
//     // const sumarElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
    
//     const sumatoria = array.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);

//     return (sumatoria / (array.length))
// }

// // Detectar si una lista es par
// function esPar(array) {
//     // if (array.length % 2) {
//     //     return false;
//     // } else {
//     //     return true;
//     // }
//     return !(lista.length % 2);
// }
// // Detectar si una lista es impar
// function esImpar(array) {
//     return (array.length % 2);
// }

// // Metodo para calcular la media de cualquier tipo de lista
// function calcularMediana(arrayDesordenado) {
//     const array = ordenarLista(arrayDesordenado);

//     // detecto si la lista es par o impar
//     if (esImpar(array)) {
//         // tomo el valor del item central redondeado para abajo. Ej si array length = 7 --> recorto 3.5 a 3
//         return array[Math.trunc(array.length/2)];
//     } else {
//         // agarro los dos items del centro y les calculo el promedio
//         return calcularPromedio([array[(array.length/2)-1], array[(array.length/2)]]);
//     }
// }

// function ordenarLista(array) {
//     // const listaOrdenada = array.sort(function ordenarListaSort(valorAcumulado, nuevoValor){
//     //     return (valorAcumulado - nuevoValor);
//     // });

//     const listaOrdenada = array.sort((a,b) => a-b); // con arrow function

//     return listaOrdenada;
// }

// // Metodo para calcular la moda de cualquier lista
// function calcularModa(arrayDesordenado) {
//     const array = ordenarLista(arrayDesordenado);
//     const arrayRepeticiones = [];
//     let valorAcumulado = array[0];
//     let repeticion = 0;
//     for (item of array) {
//         if (item === valorAcumulado) {
//             repeticion++;
//         } else {
//             arrayRepeticiones.push({ valor: valorAcumulado, repeticiones: repeticion});
//             valorAcumulado = item;
//             repeticion = 1;
//         }
//     }

//     arrayRepeticiones.sort(function ordernarObjetos(valorAnterior, nuevoValor){
//         return nuevoValor.repeticiones - valorAnterior.repeticiones;
//     });

//     return arrayRepeticiones[0];
// }