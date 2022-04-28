const express = require('express');

const app = express();

const { usuarios } = require('./db/usuarios.json');


app.use(express.static('assets'));

app.get('/abracadabra', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get("/abracadabra/usuarios:", (req, res) => {
    res.sendFile(__dirname + '/db/usuarios.json');
});

let acceso = false;

const liberarAcceso = async (res) => {
    let acceso = true;
    console.log(acceso)
    res.redirect("/abracadabra")
}

app.get("/abracadabra/juego/:usuario", async (req, res) => {

    const usuario = req.params.usuario;
    const exist = await usuarios.includes(usuario)
    exist
        ? liberarAcceso(res)
        : res.sendFile(__dirname + '/assets/img/who.png')
    /*
    if (exist == true){
        res.redirect("/abracadabra")
    } else{
        res.sendFile(__dirname + '/assets/img/who.png')
    }
    */
});

app.get("/abracadabra/conejo/:n", (req, res) => {
    const n = req.params.n;
    const nuemeroAleatorio = Math.floor(Math.random() * (5 - 1) + 1);
    
    if (n == nuemeroAleatorio) {
        res.sendFile(__dirname + '/assets/img/conejito.png')
    } else {
        res.sendFile(__dirname + '/assets/img/voldemort.png')
    }
});


app.listen(3000, () => {
    console.log('Server started on port 3000!\nhttp://localhost:3000/abracadabra/juego');
});