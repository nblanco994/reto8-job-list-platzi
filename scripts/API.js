// Clase de API con la cual se crearan metodos para traer la información
// se exporta para que pueda ser accedida desde otros sitios
export class API {
  constructor() {}
  // metodo para hacer la peticion asincrona
  async obtenerDatos() {
    // el uso del try / catch para el manejo de errores
    try {
      // hacemos una peticion asincrona a data.json
      const data = await fetch("../data.json");
      // la data debemos transformarla a un json para poder usarla
      const res = await data.json();
      // retornamos la respuesta
      return res;
    } catch (error) {
      // en caso de algun error, lanzamos un error en consola
      console.error("Fecth Error", error.message);
    }
  }
}
