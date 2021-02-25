// Importamos API para poder llamar la data
import { API } from "./API.js";
// Importamos UI para obtener los datos en nuestro archivo JSON
import { UI } from "./UI.js";
// Instancia de API en la variable api
const api = new API();
// Instancia de UI en la variable ui
const ui = new UI();
// El evento DOMContentLoaded escucha cuando el DOM ha sido cargado
// En ese momento podemos ejecutar lo que queramos

var  parametersFilter =  document.querySelector('.parameters-filter');
var  filterBtn =  document.querySelector('.filter__btn');
var filterClearButton = document.querySelector('.parameter-filter__left-button');
var  parametersFilterRight =  document.querySelector('.parameter-filter__right');
//var filterButton2 = document.createElement('button');

const filterLeft = document.getElementsByClassName('parameter-filter__lef');
let data = [];
let filterData = [];

document.addEventListener("DOMContentLoaded", async () => {
  // Hacemos la peticion a la api para obtener datos
  // Recordar que es una peticion asincrona
  data = await api.obtenerDatos();
  
  // Mostramos datos por consola
  //console.log(data);
  // Mostramos datos de las profesiones
  ui.mostrarProfesiones(data);

  // Volvemos a ejecutar la función para el contenido onclick="removeCardSearch()"
  agregarEscuchaEnContenido();
});

function agregarSeleccionCategoria() {
  parametersFilter.style.display = 'flex';
}
function agregarEscuchaEnContenido() {
  // Busca todos los botones que poseen categorias y los alamacena como un arreglo de datos
  let categories = document.querySelectorAll(".categories");
  // Primer: for recorre las categorias de cada oferta laboral
  for (let i = 0; i < categories.length; i++) {
    // Segundo: recorre los botones de cada oferta laboral 
    for (let j = 0; j < categories[i].children.length; j++) {
      // A cada elemento le agregamos un escucha, esto disparauna funcion que se
      // activa al hacer click
      categories[i].children[j].addEventListener("click", function (ev) {
        // Obtenemos el name del atributo. Ej: data-level
        let name = categories[i].children[j].attributes[0].name;
        // Obtenemos el name del atributo. Ej: junior
        let value = categories[i].children[j].attributes[0].value;
        // Almacenamos esta información en un objeto,
        // Otra forma de escribir el código es:
        // let category = {name, value};
        let category = { name: name, value: value };
        //console.log(category);
        // Llamamos el método filter...
          let seleccion = filterData.filter((item) =>{
            return item.value === category.value;
           });
          if(seleccion.length === 0){
           filterData.push(category);
          }
          filter(category);
          ui.mostrarseleccion(filterData);
          limpiarCategorias();
          limpiarCategoria();
          
      });
    }
  }
}

// METODO INCONCLUSO
function limpiarCategoria(){ //arr, item
   document.attachEvent = function( evt, q, fn ) {	
  document.addEventListener( evt, ( e ) => {
    if (e.target.matches( q ) ) {
     fn.apply( e.target, [e] );
   }
  });
};
document.attachEvent('click','.filter__btn', function() {

  // Limpiamos la categoria seleccionada
  filterData.map((cat) => {
    var eliminarCategory = Math.floor(Math.random() * cat.length);
    filterData = filterData.filter((e, i) => i !== eliminarCategory);
    ui.mostrarseleccion(filterData);
    console.log(filterData);
  });
});
}

function limpiarCategorias(){
  filterClearButton.addEventListener("click", ()=>{
    // Limpiamos el arreglo de categorias
    var elementosRemovidos = filterData.splice(0, filterData.length);
    // Llamamos el metodo... 
    ui.mostrarseleccion(elementosRemovidos);
    // Agregamos la categoria para poder filtrar nuevamente
    ui.mostrarProfesiones(data);
    agregarEscuchaEnContenido();
    // Limpiamos el HTML
    parametersFilterRight.innerHTML = '';
    parametersFilter.style.display = 'none';
 });
}
function filter(category) {
  // Declaramos una variable que va a ser igual a la data
  let newData = data;
  // Guardamos los datos del filtrado para usarlo en el futuro
  // Hacemos un push, esto inserta la información de un objeto a un areglo
  //if(!filterData.includes(category)){
 
  // Iteramos el filtro, esto para filtrarlo de acuerdo a todas las categorias que tenga almacenado

filterData.map((cat) => {
    // Esta variable almacena el filtrado segun una categoria especifica
    let element = [];
    // segun el caso...
    agregarSeleccionCategoria();
   
    switch (cat.name) {
 
      /*
      Para cada caso, iteramos la información de las propuestas laborales
      usamos un método llamado filter. Este método filtra la informaciónde acuerdo a 
      los parametrosque se les pasa para tools y Languajes, se usa un método llamado indexOf.
      Este busca una palabra en un arreglo, si la encuentra devuelve la posición en que se ubica 
      en el arreglo, si la encuentra devuelve la posición en que se ubica en el arreglo, si no la encuentra
      devuelve -1. Como tools y languages son arreglos de strings, buscamos la categoría por la que filtramos 
      para level y role.
      Solamente nos aseguramos que el nombre del rol o nivel sea igual al que vamos a filtrar. filterButton
      */
     

      case "data-tools":
        element = newData.filter((item) => {
            // filterButton.innerHTML = cat.value; 
          return item.tools.indexOf(cat.value) != -1;
        });
        break;

      case "data-languages":
        element = newData.filter((item) => {
          //filterButton.innerHTML = cat.value;
          return item.languages.indexOf(cat.value) != -1;
        });
        break;

      case "data-level":
       element = newData.filter((item) => {
          //filterButton.innerHTML = cat.value;
          return item.level === cat.value;
        });
        break;

      case "data-role":
        element = newData.filter((item) => { 
            //filterButton.innerHTML = cat.value;
          return item.role === cat.value;
        });
        break;
    }
  
    // element termina siendo un arreglo con todas las ofertasque coinciden con el filtrado y
    // usamos el metodo slice
    // esto permite hacer una copia de lo que tenga en el array en otro array, sin borrar lo que este tenga dentro
    newData = element.slice();
    
  });
 
  // Luego de filtrar toda la información, newData contiene todas las ofertas que coinciden con el filtrado
  // Llamamos el método mostrarProfesiones pasandole newData
  ui.mostrarProfesiones(newData);
  // Volvenos a ejecutar la función agregarEscuchaEnContenido debido a que se vuelve a crear una
  // nueva información en el HTML.
  agregarEscuchaEnContenido();
}

