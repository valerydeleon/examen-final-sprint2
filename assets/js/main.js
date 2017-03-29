var inputNuevoPendiente = document.getElementById('inputNuevoPendiente');
var inputNuevoItem = document.getElementById('inputNuevoItem');

function agregarPendiente(){
  var agregarTituloPendiente = document.getElementById('tituloPendiente');
  agregarTituloPendiente.innerText = inputNuevoPendiente.value;
}
agregarPendiente()

function agregarlistaDesordenada(){
  var agregarItemAlistaDesordenada = document.getElementById('item');
  agregarItemAlistaDesordenada.innerText = inputNuevoItem.value;
}
