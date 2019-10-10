const express = require('express');

module.exports = (connection) => {
    const router = express.Router();

    //cadastro dos voluntários
    router.get('/cadastro/:id', (req, resp) => {
        let id_cadastro = req.params.id;
        connection.query("SELECT * FROM cadastro_voluntarios WHERE idcadastro_voluntario = ?",
            [id_cadastro],
            (err, result) => {
                if (err) {
                    console.log(err);
                    resp.status(500).end();
                } else {
                    resp.json(result);
                    resp.status(200);
                }
            });
    });

    router.post('/cadastro', (req, resp) => {
        let cadastro = req.body;
        if (cadastro == null) {
            resp.status(204).end();
        } else {
            connection.query("INSERT INTO cadastro_voluntarios SET ?",
                [cadastro],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        resp.status(500).end();
                    } else {
                        resp.json(result);
                        resp.status(200);
                    }
                });
        }
    });

    router.put('/cadastro/:id', (req, resp) => {
        let id_cadastro = req.params.id;
        let cadastro = req.body;
        cadastro.idcadastro_voluntario = id_cadastro;
        connection.query('UPDATE cadastro_voluntarios SET ? WHERE idcadastro_voluntario = ?',
            [cadastro, id_cadastro],
            (err, result) => {
                if (err) {
                    console.log(err);
                    resp.status(500).end();
                } else {
                    resp.status(200).end();
                }
            });
    });

    router.delete('/cadastro/:id', (req, resp) => {
        let id_cadastro = req.params.id;
        connection.query('DELETE FROM cadastro_voluntarios WHERE idcadastro_voluntario = ?',
            [id_cadastro],
            (err, result) => {
                if (err) {
                    console.log(err);
                    resp.status(500).end();
                } else {
                    resp.status(200).end();
                }
            });
    });

    return router;
}