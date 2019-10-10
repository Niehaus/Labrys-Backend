const express = require('express');

module.exports = (connection) => {
    const router = express.Router();

    //parte das denuncias
    router.get('/denuncias/:id', (req, resp) => {
        let id_denuncia = req.params.id;
        connection.query("SELECT * FROM denuncias WHERE iddenuncia = ?",
            [id_denuncia],
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

    router.post('/denuncias', (req, resp) => {
        let denuncia = req.body;
        if (denuncia == null) {
            resp.status(204).end();
        } else {
            connection.query("INSERT INTO denuncias SET ?",
                [denuncia],
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

    router.put('/denuncias/:id', (req, resp) => {
        let id_denuncia = req.params.id;
        let denuncia = req.body;
        denuncia.iddenuncia = id_denuncia;
        connection.query('UPDATE denuncias SET ? WHERE iddenuncia = ?',
            [denuncia, id_denuncia],
            (err, result) => {
                if (err) {
                    console.log(err);
                    resp.status(500).end();
                } else {
                    resp.status(200).end();
                }
            });
    });

    router.delete('/denuncias/:id', (req, resp) => {
        let id_denuncia = req.params.id;
        connection.query('DELETE FROM denuncias WHERE iddenuncia = ?',
            [id_denuncia],
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