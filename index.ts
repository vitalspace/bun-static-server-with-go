import { Server } from "./src/lib/lib";
// instanciamos la libreria y comenzamos a usar sus metodos.
const server = new Server();
// Setiamos la carpeta static "Archivos Publicos"
server.static("public");
// Setiamos una ruta "/" << index y el template/html que va renderiar
server.render("/", "./templates/index.html");
// Setiamos el puerto donde la aplicacion va escuchar peticiones
server.listen("3000")