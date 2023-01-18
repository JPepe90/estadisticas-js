// Funciones de calculo de perimetro y area para figuras geometricas

// Cuadrado ----------------------------------------------

console.group('Calculos Cuadrado')

function calcularCuadrado(lado) {
    return {
        lado: lado,
        perimetro: lado * 4,
        area: lado * lado,
    };
}

console.groupEnd('Calculos Cuadrado')

// Triangulo ----------------------------------------------

console.group('Calculos Triangulo')

function calcularTriangulo(ladoA, ladoB, ladoBase, altura) {
    return {
        'lado A': ladoA,
        'lado B': ladoB,
        'base': ladoBase,
        'altura': altura,
        perimetro: ladoA + ladoB + ladoBase,
        area: (ladoBase * altura) / 2,
    };
}

console.groupEnd('Calculos Triangulo')

// Circulo ----------------------------------------------

console.group('Calculos Circulo')

function calcularCirculo(radio) {
    // const PI = 3.1415

    // return {
    //   radio: radio,
    //   diametro: radio * 2,
    //   perimetro: 2 * PI * radio,
    //   area: PI * (radio ** 2)
    // };

    // usando librerias Math
    return {
        radio: radio,
        diametro: radio * 2,
        perimetro: 2 * Math.PI * radio,
        area: Math.PI * Math.pow(radio, 2),
    };
}

console.groupEnd('Calculos Circulo')

// Altura Triangulo Isosceles ----------------------------------------------

console.group('Calculos Altura Triangulo Isosceles')

function calcularAlturaIsosceles(ladoA, ladoB, ladoBase) {

    if (ladoA === ladoB && ladoA != ladoBase){
        const altura = Math.sqrt(Math.pow(ladoA,2) - (Math.pow(ladoBase, 2) / 4));

        return {
            'lado A': ladoA,
            'lado base': ladoBase,
            altura: altura,
            perimetro: (2 * ladoA) + ladoBase, 
            area: ladoBase * altura / 2,
        };
    } else {
        return console.warn('Los valores ingresados no forman un triangulo isosceles!');   
    }

}

console.groupEnd('Calculos Altura Triangulo Isosceles')

// Altura Triangulo Escaleno ----------------------------------------------

console.group('Calculos Altura Triangulo Escaleno')

function calcularAlturaIsosceles(ladoA, ladoB, ladoBase) {

    const Perimetro = ladoA + ladoB + ladoBase;
    const semiPerimetro = Perimetro / 2;
    const altura = (2 / ladoBase) * Math.sqrt(semiPerimetro * (semiPerimetro - ladoA) * (semiPerimetro - ladoB) * (semiPerimetro - ladoBase));

    return {
        'lado A': ladoA,
        'lado B': ladoB,
        'lado base': ladoBase,
        altura: altura,
        perimetro: Perimetro, 
        area: ladoBase * altura / 2,
    };

}

console.groupEnd('Calculos Altura Triangulo Escaleno')