const express = require('express');
const app = express();

let mysql = require('mysql');

app.use(express.json());

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'labrys',
    multipleStatments: true
});

connection.connect((err) => {
    if (!err) {
        console.log('BD connection bem-sucedida!')
    } else {
        console.log('BD connection falhou \n Error:' + JSON.stringify(err, undefined, 2));
    }
});

app.listen('3000', () => {
    console.log('Backend escutando na porta 3000....')
});

//denuncia
app.get('/denuncias', (req, resp) => {
    let sql = `SELECT * FROM denuncias`;
    connection.query(sql, (err, results, fields) => {
       if (!err) {
           //console.log(results);
           resp.send(results);
       } else {
           console.log(err);
       }
    })
});
//insert into denuncias values (0,'lugar y', 'violencia2', 'depoimento',125,521); 
//[den.iddenuncia,den.nome_local,den.tipo_violencia,den.depoimento,den.latitude,den.longitude]
app.post('/denuncias', (req, resp) => {
    console.log('Chamou -> /entregador/:id')
    let den = req.body;
    sql = "INSERT INTO denuncias VALUES ('" + den.iddenuncia + "','" + den.nome_local + "','" + den.tipo_violencia + "','" + den.depoimento + "','" + den.latitude + "','" + den.longitude + "')";
     connection.query(sql, [den.iddenuncia, den.nome_local, den.tipo_violencia, den.depoimento, den.latitude, den.longitude],(err, rows, fields) => {
         if (!err){
            console.log('inseri?');
            resp.send(rows);
         }
         else{
            console.log(err);
         }
     })
});

app.put('/denuncias/:id', (req, resp) => {
    console.log('Chamou -> /entregador/:id')
    resp.status(200).end();
});

app.delete('/denuncias/:id', (req, resp) => {
    console.log('Chamou -> /entregador/:id')
    resp.status(200).end();
});
