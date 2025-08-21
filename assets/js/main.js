

const boton = document.getElementById("boton");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    nombre = document.getElementById("txtNombre").value;
    console.log(nombre);
    console.log("Hola mundo");
})

// saludar("Nicolas");

// function saludar(mensaje){
//     console.log("Hola que tal: " + mensaje);
// }

saludar("Nicolas");

// const saludar = ( mensaje ) => {
//     console.log(`Hola ${mensaje}`);
// }
const saludar = mensaje  => console.log(`Hola ${mensaje}`);
