// Importamos API para poder llamar la data
import { API } from "./API.js";
// Instancia de API en la variable api
const api = new API();

// El evento DOMContentLoaded escucha cuando el DOM ha sido cargado
// en ese momento podemos ejecutar lo que queramos
document.addEventListener("DOMContentLoaded", async () => {
  // hacemos la peticion a la api para obtener datos
  // recordar que es una peticion asincrona
  let data = await api.obtenerDatos();
  // mostramos datos por consola
  console.log(data);
});
