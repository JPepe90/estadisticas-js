// encontrar el detalle de un usuario
function encontrarPersona(personaBuscada) {
    return salarios.find(datos => datos.name === personaBuscada);
}

// calcular la mediana salarial de cualquier persona
function calcularMedianaSalarioPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map((trabajos) => trabajos.salario);

    const medianaSalarial = PlatziMath.calcularMediana(salarios);
    //console.log(nombrePersona + ': ' + medianaSalarial);
    return medianaSalarial;
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

// Calcular la mediana de salarios de una empresa para un anio especifico
function calcularMedianaSalarioEmpresaAnio(empresa,anio) {
    if (!empresas[empresa]){
        console.warn('La empresa no existe');
        return false;
    } else if (!empresas[empresa][anio]){
        console.warn('El anio indicado para la empresa no tiene salarios registrados');
        return false;
    } else {
        console.log(empresas[empresa][anio]);
        return PlatziMath.calcularMediana(empresas[empresa][anio]);
    }    
}

// calcular la mediana de salarios de una empresa
function proyeccionMedianaSalarioEmpresa(empresa) {
    if (!empresas[empresa]) {
        console.warn('La empresa no existe');
        return false;
    } else {
        console.group('proyeccion empresa');
        const medianasYear = [];

        Object.keys(empresas[empresa]).forEach(function(anio){
            const medianaYear = PlatziMath.calcularMediana(empresas[empresa][anio]);
            medianasYear.push(medianaYear);
        });
        console.log('medianas por year:');
        console.log(medianasYear);

        const porcentualesYear = [];
        for (let i = 1; i < medianasYear.length; i++) {
            porcentualesYear.push((medianasYear[i] - medianasYear[i-1]) / medianasYear[i-1]);
        }
        console.log('porcentuales por year:');
        console.log(porcentualesYear);

        const medianaPorcentualTotal = PlatziMath.calcularMediana(porcentualesYear);
        const medianaSalarioProyectado = medianasYear[medianasYear.length - 1] * (1 + medianaPorcentualTotal);
        
        console.log('mediana porcentual y mediana salarial proyectada');
        console.log(medianaPorcentualTotal);
        console.log(medianaSalarioProyectado);

        console.groupEnd('proyeccion empresa');
        return medianaSalarioProyectado;
    }
}

// Analisis general
function medianaGeneral() {
    const medianaUsuarios = salarios.map(persona => calcularMedianaSalarioPersona(persona.name));
    const medianaPersonas = PlatziMath.calcularMediana(medianaUsuarios);
    console.log(medianaUsuarios);
    
    return medianaPersonas;
}

function medianaTop10() {
    const medianaUsuarios = salarios.map(persona => calcularMedianaSalarioPersona(persona.name));
    PlatziMath.ordenarLista(medianaUsuarios);

    const cantidadTop10 = Math.trunc((medianaUsuarios.length * 10) / 100);
    const limiteInicial = medianaUsuarios.length - cantidadTop10;
    const top10 = medianaUsuarios.slice(limiteInicial, medianaUsuarios.length);
    
    console.log(top10);
}