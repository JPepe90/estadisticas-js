// encontrar el detalle de un usuario
function encontrarPersona(personaBuscada) {
    return salarios.find(datos => datos.name === personaBuscada);
}

// calcular la mediana salarial de cualquier persona
function calcularMedianaSalarioPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map((trabajos) => trabajos.salario);

    const medianaSalarial = PlatziMath.calcularMediana(salarios);
    console.log(nombrePersona + ': ' + medianaSalarial);
}

function calcularMedianaTodos() {
    for (persona of salarios) {
        calcularMedianaSalarioPersona(persona.name);
    }
}

/* 
    Esta funcion saca la mediana de incrementos salariales y se la asigna 
    como proyeccion de incremento salarial del proximo año
*/
function proyecionSalarialPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map((trabajos) => trabajos.salario);
    const incrementosSalario = [];

    for (let i = 1; i < salarios.length; i++) {
        incrementosSalario.push((salarios[i] - salarios[i-1])/salarios[i-1]);
    }
    
    const aumentoSalarialPorcentual = PlatziMath.calcularMediana(incrementosSalario);
    const nuevoSalario = salarios[salarios.length - 1] * (1 + aumentoSalarialPorcentual);
    console.log(nuevoSalario);
}

// Encontrar todos los usuarios que trabajaron para determinada empresa
const empresas = {};
salarios.forEach(function(datos) {
    listaTrabajos = datos.trabajos;
    listaTrabajos.forEach(function(info) {
        if (!Object.keys(empresas).find(function(nombre){return nombre === info.empresa})){
            const dataInicial = {};
            dataInicial[info.year] = [info.salario];
            empresas[info.empresa] = dataInicial;
        } else if (!empresas[info.empresa][info.year]){
            empresas[info.empresa][info.year] = [info.salario];
        } else {
            empresas[info.empresa][info.year].push(info.salario);
        }        
    });
});


