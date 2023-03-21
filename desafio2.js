const personas = [
    {nombre: 'Juan', edad: 30},
    {nombre: 'Ana', edad: 25},
    {nombre: 'Pedro', edad: 27},
    {nombre: 'Maria', edad: 22},
];

const resultado = obtenerPersonaMasJoven(personas);
console.log(resultado);

function obtenerPersonaMasJoven(){
    var personaJoven = personas.reverse();
    return personaJoven[0];
}


