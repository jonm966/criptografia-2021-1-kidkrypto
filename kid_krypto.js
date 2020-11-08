// Autor: Jonas Montoya Landa
// Fecha: 07/11/20
// Descripcion: Algoritmo Kid Krypto

const readline = require('readline');
const cifrar = require('./cifrado');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

r1.on('line', line => controlador(line));

algoritmo = {
  metodo: '',
  a: null,
  b: null,
  A: null,
  B: null,

  ejecutar(mensaje){
    if (this.metodo === 'E'){
      cifrar.cifrar( this.a, this.b, this.A, this.B, mensaje );
    } else {
      cifrar.descifrar( this.a, this.b, this.A, this.B, mensaje );
    }
    this.a = null;
    this.b = null;
    this.A = null;
    this.B = null;
    this.metodo = '';
  }
};

const controlador = linea => {
  switch(linea){
    
    case 'E':
      algoritmo.metodo = 'E';
      break;

    case 'D':
      algoritmo.metodo = 'D';
      break;

    default:
      if( !algoritmo.a ) //Si no se ha asignado a
        algoritmo.a = Number(linea);

      else if( !algoritmo.b ) //Si no se ha asignado b
        algoritmo.b = Number(linea);

      else if( !algoritmo.A ) //Si no se ha asignado A
        algoritmo.A = Number(linea);

      else if( !algoritmo.B ) //Si no se ha asignado B
        algoritmo.B = Number(linea);

      else //Se asigna el mensaje a cifrar/descifrar
        algoritmo.ejecutar(Number(linea));
  }
};
