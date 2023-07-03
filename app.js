const forma = document.forms['forma'];
const mensaje = forma['mensaje'];
const enviar = document.getElementById('enviar');




const mensajes = [];


const cargar = () => {
    let titulo = `Bienvenido al chat <3`;
    document.getElementById('title').innerHTML = titulo;
}
document.getElementById('body').onload = cargar;



const cargarMENSJAES = () => {

    let mensajeHTML = "";
    for (const message of mensajes) {
        mensajeHTML += renderizar(message);

    }
    document.getElementById('mostrar').innerHTML = mensajeHTML;
}

const renderizar = (mensaje) => {
    let mensajePantalla = `<div class="message">${mensaje._mensaje} <label class="time" for="">${mensaje._hours}:${mensaje._minuts} </label></div> 
    `;
    return mensajePantalla;
};

const agregarMensaje = () => {
    let timepo = new Date();
    let hours = timepo.getHours();
    let minuts = timepo.getMinutes();

    mensajes.push(new Mensaje(mensaje.value, hours, minuts));
    cargarMENSJAES();

}



enviar.addEventListener('click', () => {
    agregarMensaje();
    cargarMENSJAES();
    mensaje.value = "";
})









