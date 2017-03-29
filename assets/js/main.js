// var inputNuevoPendiente = document.getElementById('inputNuevoPendiente');
// var nuevaListaDesordenada = document.createElement("ul");

function agregarTituloPendiente(){
  var agregarTituloPendiente = document.getElementById('pendienteS');
  agregarTituloPendiente.innerHTML = inputNuevoPendiente.value;
}

var arregloItems = [];

function Item (itemPendiente){
  this.itemPendiente = itemPendiente;
};

function crearItem(){
  var itemPendiente = document.getElementById("inputNuevoItem");

  var item = new Item(itemPendiente.value)

    itemPendiente.value = "";
    arregloItems.push(item);
    mostrarItem();
};

var listaDesordenada, nuevoLi;

function mostrarItem(){
  listaDesordenada = document.createElement('li');

  var sectionLista = document.getElementById("itemS");
  sectionLista.innerHTML = "";

  arregloItems.forEach(function(item){
    nuevoLi = document.createElement('li');
    nuevoLi.innerHTML = item.itemPendiente;
    listaDesordenada.appendChild(nuevoLi);
    console.log(nuevoli)
  })
  sectionLista.appendChild(listaDesordenada);

}



// function agregarItem(){
//   var sectionLista = document.getElementById("itemS");
//   var contenedorDeItems = document.getElementById("contieneItems");
//   contenedorDeItems.innerHTML = sectionLista.inn
// }








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
