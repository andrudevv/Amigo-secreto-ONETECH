// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listFriends = [];

//función principal para añadir nombres
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let name = input.value.trim();
  if (name === "") {
    alert("Por favor, escribe un nombre.");
    return;
  }
  listFriends.push(name);
  updateList();
  input.value = ""; // Limpia el campo para ingresar nuevos names
  input.focus(); // Devuelve el foco al input para continuar escribiendo
}

// función que actualiza la lista cada que se de click en el boton añadir
function updateList() {
  let ul = document.getElementById("listaAmigos");
  ul.innerHTML = ""; // Limpia la lista antes de actualizarla

  for (let i = 0; i < listFriends.length; i++) {
    let li = document.createElement("li");
    li.textContent = listFriends[i];
    ul.appendChild(li); //agrega el nombre del amigo a la lista principal
  }
}

//función para seleccionar aleatoriamente un amigo de la lista
function sortearAmigo() {
  let ul = document.getElementById("resultado");
  ul.innerHTML = "";
  if (listFriends.length < 2) {
    alert("Debes agregar al menos dos amigos para realizar el sorteo.");
    return;
  }
  let selected = listFriends[Math.floor(Math.random() * listFriends.length)]; ///sortea el nombre entre los amigos de la lista
  ul.innerHTML = selected;
}
