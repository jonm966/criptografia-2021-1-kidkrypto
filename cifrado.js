const cifrar = ( a, b, A, B, mensaje ) => {
 
 const M = calculaM( a, b );
 const e = calculae( A, M, a);
 const n = calculan( e, d, M ); 

 const textoCifrado = ( mensaje * e ) % n;
 
 console.log(textoCifrado);
}

const descifrar = ( a, b, A, B, mensaje ) => {
  
  const M = calculaM( a, b );
  const e = calculae ( A, M, a );
  const d = calculad( B, M, b );
  const n = calculan( e, d, M);

  const mensajeDescifrado = ( mensaje * d ) % n;

  console.log(mensajeDescifrado);
}

const calculaM = ( a, b ) => a * b - 1;

const calculae = ( A, M, a ) => A * M + a;

const calculad = ( B, M, b ) => B * M + b;

const calculan = ( e, d, M ) => ( e * d - 1 ) / M;

module.exports = { cifrar: cifrar, descifrar: descifrar };
