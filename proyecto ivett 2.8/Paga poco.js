function calcular() {
    // Obtener el nombre del cliente
    var nombrecliente = document.getElementById('nombrecliente').value;

    // Definir los cupones con sus precios y cantidades correspondientes
    var cupones = [
        { nombre: "Restaurante Benihana", costo: 40, cantidad: parseInt(document.getElementById('cantidadBenihana').value) || 0, seleccionado: document.querySelector('input[name="cupon"][value="40"]').checked },
        { nombre: "Restaurante Bennigans", costo: 60, cantidad: parseInt(document.getElementById('cantidadBennigans').value) || 0, seleccionado: document.querySelector('input[name="cupon"][value="60"]').checked },
        { nombre: "Sala de belleza Vidals", costo: 100, cantidad: parseInt(document.getElementById('cantidadVidals').value) || 0, seleccionado: document.querySelector('input[name="cupon"][value="100"]').checked },
        {nombre: "Clínica y Spa Framesi", costo: 125, cantidad: parseInt(document.getElementById('cantidadFramesi').value) || 0, seleccionado: document.querySelector('input[name="cupon"][value="125"]').checked }
    ];

    // Calcular el total inicial y los descuentos
    var totalInicial = 0;
    var totalCupones = 0;

    cupones.forEach(cupon => {
        if (cupon.seleccionado && cupon.cantidad > 0) {  // cantidad de cupones desde 0
            totalInicial += cupon.costo * cupon.cantidad;
            totalCupones += cupon.cantidad;
        }
    });

    // Aplicar descuento si se compran más de 3 cupones
    var descuento = totalCupones > 3 ? totalInicial * 0.20 : 0;

    // Calcular el IVA y el total a pagar
    var totalConDescuento = totalInicial - descuento;
    var iva = totalConDescuento * 0.13;
    var totalAPagar = totalConDescuento + iva;

    // Imprimir la factura
    document.write("<h2>Factura de la compra</h2>");
    document.write("Nombre del cliente: " + nombrecliente + "<br>");

    cupones.forEach(cupon => {
        if (cupon.seleccionado && cupon.cantidad > 0) {  // Solo imprimir los cupones seleccionados y con cantidad mayor a 0
            document.write("Cupón: " + cupon.nombre + " - Cantidad: " + cupon.cantidad + " - Total: $" + (cupon.costo * cupon.cantidad) + "<br>");
        }
    });

    document.write("<h2>Resumen de la compra</h2>");
    document.write("Total inicial: $" + totalInicial + "<br>");
    document.write("Descuento: $" + descuento + "<br>");
    document.write("IVA (13%): $" + iva + "<br>");
    document.write("Total a pagar: $" + totalAPagar + "<br>");
}