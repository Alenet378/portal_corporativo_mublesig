document.addEventListener('DOMContentLoaded',()=> {
    console.log('Ingreso al sistema');
    const tipoMueble = document.getElementById('mueble');  
    const cantidadPiezas = document.getElementById('cantidad');
    
    const fleteDestino = document.getElementById('destino');  
    const botonResultado = document.getElementById('btn-calcular');
    const txtResultado = document.getElementById('resultado-calc-b');

    console.log(parseFloat(tipoMueble.value));
    console.log(parseInt(cantidadPiezas.value));


    function calcularPresupuesto(){
        console.log('Ingreso a la funcion');
        const precio = parseFloat(tipoMueble.value);
        const cantidad = parseInt(cantidadPiezas.value);
        const flete = parseFloat(fleteDestino.value);

        if(isNaN(cantidad) || cantidad <= 0 ){
            txtResultado.innerHTML = `<div> Error Ingrese una Cantidad Mayor a 0 <div>`;
        }

        const subTotal= precio * cantidad;
        let descuento = 0;

        if( cantidad >= 10){
            descuento = subTotal*0.12;
        }

        const totalPagar= (subTotal - descuento)+ flete;
        console.log(totalPagar);

        txtResultado.innerHTML= `
        <div>
            <div>
                <span> Cantidad de Piezas: ${cantidadPiezas.value}
            </div>
            
            <div>
                <span> Producto Seleccionado: ${tipoMueble}
            </div>
            <div>
                <span> Total a Pagar: ${totalPagar} 
            </div>
        </div>`
    }

    
    if(botonResultado){
            botonResultado.addEventListener('click', calcularPresupuesto);
        }

})