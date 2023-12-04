console.log("Hoja de vida interactiva cargada");

window.onload = mostrarEstudios;

document
  .getElementById("añadirExperiencia")
  .addEventListener("click", function () {
    let experienciaNueva = prompt("Digita la nueva experiencia");
    if (experienciaNueva) {
      let ul = document.getElementById("listaExperiencia");
      let li = document.createElement("li");
      li.textContent = experienciaNueva;
      ul.appendChild(li);
      console.log(experienciaNueva);
    }
  });

document.getElementById("contactar").addEventListener("click", function () {
  let email = prompt("Ingresa tu correo");
  if (email) {
    alert("Gracias " + email + " me pondré en contacto contigo pronto!");
  }
});

const estudios = ["A", "B", "C"];
function mostrarEstudios() {
  let ul = document.getElementById("listaEstudios");
  for (let i = 0; i < estudios.length; i++) {
    let li = document.createElement("li");
    li.textContent = estudios[i];
    ul.appendChild(li);
  }
}
const proyectos = [
  "Proyecto1",
  "Proyecto2",
  "Proyecto3",
  "Proyecto4",
  "Proyecto5",
];
document.getElementById("verProyectos").addEventListener("click", function () {
  let numProyecto = prompt("Cuantos proyectos desea ver? (Max 5)");
  let ul = document.getElementById("proyectosAnteriores");
  numProyecto = parseInt(numProyecto, 10);
  let ul = document.getElementById("proyectosAnteriores");
  let liElements = ul.getElementsByTagName("li");

  // Eliminar cada elemento li de la lista
  while (liElements.length > 0) {
    ul.removeChild(liElements[0]);
  }

  if (!isNaN(numProyecto)) {
    if ((numProyecto > 0) & (numProyecto < 6)) {
      for (let i = 0; i < numProyecto; i++) {
        let li = document.createElement("li");
        li.textContent = proyectos[i];
        ul.appendChild(li);
      }
    } else {
      alert("El valor debe estar entre 1 y 5");
    }
  } else {
    alert("El valor debe ser un número");
  }
});
