// var inputNuevoPendiente = document.getElementById('inputNuevoPendiente');
// var nuevaListaDesordenada = document.createElement("ul");


var arregloPendiente = [];

function Pendiente (tituloPendiente, itemPendiente){
  this.tituloPendiente = tituloPendiente;
  this.itemPendiente = itemPendiente;
};


function crearPendiente(){
  var tituloPendiente = document.getElementById('inputNuevoPendiente');
  var itemPendiente =  document.getElementById('inputNuevoItem');

  var pendiente = new Pendiente(
    tituloPendiente.value,
    itemPendiente.value
  )
  tituloPendiente.value = "";
  itemPendiente.value = "";

  arregloPendiente.push(pendiente);
  mostrarPendiente();
};

function mostrarPendiente(){
  listaDesordenada = document.createElement("ul");

  var sectionLista = document.getElementById("pendienteS");
  sectionLista.innerHTML = "";

  arregloPendiente.forEach(function(pendiente){
    nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = pendiente.itemPendiente;
    listaDesordenada.appendChild(nuevoLi);
  })
  sectionLista.appendChild(listaDesordenada);
}








//
//
//
//
// function agregarlistaDesordenada(){
//
//   for(var i = 0; i )
//
// }
//
//
//
//
// function agregarPendiente(){
//   var agregarTituloPendiente = document.getElementById('pendienteS');
//   agregarTituloPendiente.innerHTML = inputNuevoPendiente.value;
// }
// agregarPendiente()
//
// function agregarlistaDesordenada(){
//   var agregarItemAlistaDesordenada = document.getElementById('item');
//   agregarItemAlistaDesordenada.innerText = inputNuevoItem.value;
// }
