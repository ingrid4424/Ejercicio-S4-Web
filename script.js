
const tasks = [
    { text: "Ejercicio de web avanzada", done: true },
    { text: "Tarea electiva", done: false },
    { text: "ir a tutoria", done: true },
    { text: "ir clase de ingles", done: false },
    { text: "Almorzar con amigos", done: true },
    { text: "Hacer limpieza de la casa", done: false },
    { text: "leer un libro", done: true },
    { text: "Escuchar podcast", done: false },
    { text: "Montar en el MIO", done: true },
    { text: "Hablar con el profesor", done: false },
    { text: "Ver serie", done: true }];
  
  //selector 
  const allTasksHtml = document.getElementById("all");
  const pendingHtml = document.getElementById("pending");
  const completedHtml = document.getElementById("completed");
  
  //¿ pinto la clase de checked y unchecked y agrega un event listener a cada uno
  function createTasks() {
  
    // vaciar lista y evitar elementos repetidos
    allTasksHtml.innerHTML = "";
    pendingHtml.innerHTML = "";
    completedHtml.innerHTML = "";
  
    tasks.forEach((task) => {
      const elem = document.createElement("li");
      elem.textContent = task.text;
      elem.className = task.done ? "checked" : "unchecked";
      elem.addEventListener("click", () => toggleCompletedTask(task));
  
      const cloneElem = elem.cloneNode(true);
      cloneElem.addEventListener("click", () => toggleCompletedTask(task));
      
      allTasksHtml.append(elem);
      
      if (task.done) {
        completedHtml.append(cloneElem);
      } else {
        pendingHtml.append(cloneElem);
      }
    });
  }
  
  createTasks();

  function toggleCompletedTask(task) {
    task.done = !task.done;
  
    createTasks();
  }