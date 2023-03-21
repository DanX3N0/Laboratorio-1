const texto = 'Hola, Mundo!';
const resultado = obtenerFrecuenciaLetras(texto);
console.log(resultado);

function obtenerFrecuenciaLetras(){
    
    let caracteres = [];
    let letras = {};

    for(let i = 0; i < texto.length; i++){
        caracteres.push(texto.charAt(i));
    }

    caracteres.map(element => {
        if(letras[element]) letras[element] += 1;
        else letras[element] = 1;
    });

    return letras; 

}
