function calcular() {
    // aqui obtenes los valores del formulario
    var nombrecliente = document.getElementById('nombrecliente').value;
    var cantidad = parseInt(document.getElementById('cantidad').value);

    // aqui obtener los cupones seleccionados
    var cuponesSeleccionados = document.querySelectorAll('input[name="cupon"]:checked');
    var totalInicial = 0;
    var nombresCupones = [i];

    // aqui calculas el costo total y obtener los nombres de los cupones seleccionados
    for (var i = 0; i < cuponesSeleccionados.length; i++) {
        var cuponcosto = parseFloat(cuponesSeleccionados[i].value);
        var nombreCupon = cuponesSeleccionados[i].getAttribute("data-nombre");
        totalInicial += cuponcosto * cantidad;
        nombresCupones.push(nombreCupon);

        
    }

    // Calcular el descuento (20% si compra más de 3 cupones)
    var descuento = 0;
    if (cantidad > 3) {
        descuento = totalInicial * 0.20;
    }

    // Calcular el IVA (13%)
    var totalDescuento = totalInicial - descuento;
    var iva = totalDescuento * 0.13;
    var totalAPagar = totalDescuento + iva;

    // Impresiones 
    document.write("<h2>Factura de la compra</h2>");
    document.write("Nombre del cliente: " + nombrecliente + "<br>");
    document.write("Cupones adquiridos: " + nombresCupones + "<br>");
    document.write("Costo por los cupones: $" + (totalInicial / cantidad) + "<br><br>");

    document.write("<h2>Detalles de la compra</h2>");
    document.write("Nombre del cliente: " + nombrecliente + "<br>");
    document.write("Total inicial a pagar: $" + totalInicial +"<br>");
    document.write("Descuento otorgado: $" + descuento + "<br>");
    document.write("Total, en concepto de IVA 13%: $" + iva + "<br>");
    document.write("Total a pagar: $" + totalAPagar + "<br>");
}