const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'labrys',
    multipleStatments: true
});

var cors = require('cors');
app.use(cors());

const denuncia_module = require('./labrys-modules/denuncia.js');
const cadastro_module = require('./labrys-modules/cadastro.js');
const depoimento_module = require('./labrys-modules/depoimento.js');
const comentario_module = require('./labrys-modules/comentarios.js');
const login_module = require('./labrys-modules/login.js');

app.use(express.json());
app.use(denuncia_module(connection));
app.use(cadastro_module(connection));
app.use(depoimento_module(connection));
app.use(comentario_module(connection));
app.use(login_module(connection));

app.listen('3000', () => {
    connection.connect((err) => {
        if (err) return console.log(err);
        console.log('Backend escutando na porta 3000....');
    })
});

   app.get('/cadastro', (req, resp) => {
       connection.query("SELECT * FROM cadastro_voluntarios",
           (err, result) => {
               if (err) {
                   console.log(err);
                   resp.status(500).end();
               } else {
                   resp.status(200);
                   resp.json(result);
               }
           });
   });

