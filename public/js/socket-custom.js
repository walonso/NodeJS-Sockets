var socket = io();

//ACA nos conectamos
//on es para escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})

//emit son para enviar info
socket.emit('enviarMensaje', {
    usuario: 'Walter',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server :', resp);
});

//escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});