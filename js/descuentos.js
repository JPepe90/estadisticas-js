const btnCalcular = document.querySelector('#calcular');
const impDesc = document.querySelector('#importeDesc');
const impFinal = document.querySelector('#importeFinal');
const cupones = [
    { cupon: 'ASDFG', descuento: 20 },
    { cupon: 'BBHV6', descuento: 30 },
    { cupon: 'OPSA6', descuento: 25 },
    { cupon: '23JKY', descuento: 10 },
    { cupon: 'TRTYU', descuento: 40 },
    { cupon: 'HGFDT', descuento: 33 },
]

// Eventos ------------------------------
btnCalcular.addEventListener('click', calcularDescuento);

function calcularDescuento() {
    const precio = document.querySelector('#price').value;
    const descuento = document.querySelector('#discount').value;

    if (precio == '' || descuento == '') {
        alert('Faltan ingresar datos!');
    } else {
        const importeDescontado = precio * (descuento / 100);
        const importeFinal = precio * ((100 - descuento) / 100);

        impDesc.innerText = 'El importe descontado es: $' + importeDescontado;
        impFinal.innerText ='El importe final es: $' + importeFinal;
    }
}