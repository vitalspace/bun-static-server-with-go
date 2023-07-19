import { dlopen, suffix, FFIType } from "bun:ffi";

// Busca el binario y suffix se encarga de validar en que patarforma se ejecuta el archiv
// en este caso automaticamente suffix colocara .so ya que el script se esta ejecutando en linux
const path: string = `./server.${suffix}`;
const location: string = new URL(path, import.meta.url).pathname;

// Definimos Las funciones que vamos a usar del binario y le pasamos punteros como argumentos.
const { symbols } = dlopen(location, {
  CreateServer: {
    args: [FFIType.ptr],
  },
  Render: {
    args: [FFIType.ptr, FFIType.ptr],
  },
  CreateStaticDir: {
    args: [FFIType.ptr, ],
  },
});

// Exportamos los simbolos para que la lib pueda acceder a ellos.
export { symbols };
