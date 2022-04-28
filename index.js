const express = require('express');

const app = express();

const {usuarios} = require('./db/usuarios.json');


app.use(express.static('assets'));

app.get('/abracadabra', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get("/abracadabra/usuarios:", (req, res) => {
    res.sendFile(__dirname + '/db/usuarios.json');
});

const acceso = false;

app.get("/abracadabra/juego/:usuario", (req, res) => {
    console.log(acceso);
    const usuario = req.params.usuario;
    console.log(usuario);
    console.log(usuarios);
    usuarios.some

});

const nuemeroAleatorio = Math.floor(Math.random() * (5 - 1) + 1);

app.get("/usuario/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    const test = nombre.match(/^[aeiouAEIOU]/)
    test
        ? res.send("Si, tu nombre empieza con una vocal")
        : res.send("No, tu nombre no empieza con una vocal");
});



app.listen(3000, () => {
    console.log('Server started on port 3000!\nhttp://localhost:3000/abracadabra');
});