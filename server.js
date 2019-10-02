const express = require('express');
const app = express();

app.use(express.json());

//denuncia
app.get('/denuncias/:id', (req, resp) => {
    console.log('Chamou -> /denuncias/:id ' + resp)
    resp.status(200).end();
});

app.post('/denuncias/:id', (req, resp) => {
    console.log('Chamou -> /entregador/:id')
    resp.status(200).end();
});

app.put('/denuncias/:id', (req, resp) => {
    console.log('Chamou -> /entregador/:id')
    resp.status(200).end();
});

app.delete('/denuncias/:id', (req, resp) => {
    console.log('Chamou -> /entregador/:id')
    resp.status(200).end();
});

app.listen('3000', () => {
    console.log('Backend escutando na porta 3000....')
});