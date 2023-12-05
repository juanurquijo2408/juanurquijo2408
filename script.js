console.log("Hoja de vida interactiva cargada");

const experienciaButton = () => {
  let experienciaNueva = prompt("Digita la nueva experiencia");

  if (experienciaNueva) {
    let ul = document.getElementById("listaExperiencia");
    let li = document.createElement("li");
    li.textContent = experienciaNueva;
    ul.appendChild(li);
    console.log(experienciaNueva);
  }
};

const contacto = () => {
  let email = prompt("Ingresa tu correo");

  if (email) {
    alert("Gracias " + email + " me pondré en contacto contigo pronto!");
  }
};

const mostrarEstudios = () => {
  let ul = document.getElementById("listaEstudios");

  for (let i = 0; i < estudios.length; i++) {
    let li = document.createElement("li");
    li.textContent = estudios[i];
    ul.appendChild(li);
  }
};

const proyectosButton = () => {
  let numProyecto = prompt("Cuantos proyectos desea ver? (Max 5)");
  let ul = document.getElementById("proyectosAnteriores");
  numProyecto = parseInt(numProyecto, 10);
  let liBorrar = ul.getElementsByTagName("li");

  while (liBorrar.length > 0) {
    ul.removeChild(liBorrar[0]);
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
};

const nuevaHabilidad = () => {
  let habilidad = prompt("Introduce una nueva habilidad");

  if (habilidad) {
    let ul = document.getElementById("habilidades");
    let li = document.createElement("li");
    li.textContent = habilidad;
    ul.appendChild(li);
  }
};

const saludo = () => {
  alert("Bienvenido a esta página proyecto");
};

document
  .getElementById("añadirExperiencia")
  .addEventListener("click", experienciaButton);

document.getElementById("contactar").addEventListener("click", contacto);

const estudios = ["A", "B", "C"];

const proyectos = [
  "Proyecto1",
  "Proyecto2",
  "Proyecto3",
  "Proyecto4",
  "Proyecto5",
];
document
  .getElementById("verProyectos")
  .addEventListener("click", proyectosButton);

document
  .getElementById("añadirHabilidad")
  .addEventListener("click", nuevaHabilidad);

window.onload = saludo;

window.onload = mostrarEstudios;
