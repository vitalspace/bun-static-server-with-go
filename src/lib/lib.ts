import { ptr } from "bun:ffi";
import { symbols } from "./ffi";
import { encoder } from "./encoder";

// Definimos una clase y los metodos con los cuales el usuario/dev va poder acceder a ellos.
class Server {
  render(route: string, file: string) {
    return symbols.Render(ptr(encoder(route)), ptr(encoder(file)));
  }

  listen(port: string) {
    return symbols.CreateServer(ptr(encoder(port)));
  }

  static(staticDir: string) {
    return symbols.CreateStaticDir(ptr(encoder(staticDir)));
  }
}
export { Server };
