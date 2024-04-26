//lista principal de pedidos
var lista = [];

//esta funcion es la encargada de pedir los parametros crear un pedido(array) con cada uno de estos, que posteriormente sera añadida a la lista de todos los pedidos
function solicitarFecha() {

	var pedido = [];

	let id = lista.length;

	let nombre = prompt("Nombre:");

	let importe = prompt("Importe");

	let inputFecha = prompt("Introduce la fecha de entrada en formato yyyy/MM/dd:");

	let dias = 5;

	let nuevaFecha = new Date(inputFecha);


	for (let i = 0; i < dias; i++) {

		nuevaFecha.setDate(nuevaFecha.getDate() + 1);


		if (nuevaFecha.getDay() === 0) {
			nuevaFecha.setDate(nuevaFecha.getDate() + 1);
		}
	}

	var fechaTexto = nuevaFecha.getDate() + "/" + (nuevaFecha.getMonth() + 1) + "/" + nuevaFecha.getFullYear();

	pedido = [id, nombre, importe, inputFecha, fechaTexto];

	lista.push(pedido);

	console.log(lista);

}

//con esta funcion actualizaremos las tablas que nos muestran todos los envios y el de mayor prioridad
function recargar() {

	var tabla = "id, nombre, importe, fechaEntrada, fechaFin <br>";

	for (var x = 0; x < lista.length; x++) {

		tabla = tabla + lista[x].toString() + "<br>";

	}

	document.getElementById("mostrarEnvios").innerHTML = tabla.toString();

	var pedidosOrden = lista.sort((a, b) => {

		if (a[4] > b[4]) {

			return 1;

		}

		else

			return -1;


	})

	if (pedidosOrden[0] == null) {
		document.getElementById("proximoEnvio").innerHTML = " ";

	} else {
		document.getElementById("proximoEnvio").innerHTML = pedidosOrden[0].toString();
	}


}

//con esta funcion eliminaremos un pedido de la lista principal segun la id introducida 
function eliminar() {

	let idBuscar = prompt("indica el id del pedido que desea eliminar: ");


	for (var x = 0; x < lista.length; x++) {

		if (lista[x].id = idBuscar) {
			lista.splice(x, 1);
		}

	}
}
