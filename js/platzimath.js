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

