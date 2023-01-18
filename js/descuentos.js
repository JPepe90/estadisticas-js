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
];
let validar;

// Eventos ------------------------------
btnCalcular.addEventListener('click', calcularDescuento);

function calcularDescuento() {
    const precio = Number(document.querySelector('#price').value);

    if (!precio) {
        alert('Falta ingresar el precio!');
    } else {
        const numeroCupon = document.querySelector('#coupon').value;
        var validar = cupones.find(function(articulo){
            return articulo.cupon === numeroCupon;
        });
        let descuento;

        if (validar) {
            descuento = validar.descuento;
        } else {
            console.log('Cupon no encontrado');
            descuento = 0;
        }

        const importeDescontado = precio * (descuento / 100);
        const importeFinal = precio * ((100 - descuento) / 100);

        impDesc.innerText = 'El importe descontado es: $' + importeDescontado;
        impFinal.innerText ='El importe final es: $' + importeFinal;
    }
}