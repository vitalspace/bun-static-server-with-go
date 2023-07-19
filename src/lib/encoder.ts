

// Definimos un TextEncoder para que el binarario pueda reconocer los strings como simbolos 
// Que le pasamos por argumentos
const utf8: TextEncoder = new TextEncoder();
const encoder = (data: string) => utf8.encode(data + "\0");
export { encoder };
