const express = require('express');

module.exports = (connection) => {
    const router = express.Router();

    //comentarios
    router.get('/comentario/:id', (req, resp) => {
        let iddepoimento = req.params.id;
        connection.query("select * from comentarios where depoimento_associado = ? ",
        [iddepoimento],
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

    router.post('/comentario/', (req, resp) => {
        let comentario = req.body;
        if (comentario == null) {
            resp.status(204).end();
        } else {
            connection.query("INSERT INTO comentarios SET ?",
                [comentario],
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

    router.put('/comentario/:id', (req, resp) => {
        let id_comentario = req.params.id;
        let comentario = req.body;
        cadastro.idcadastro_voluntario = id_cadastro;
        connection.query('UPDATE comentarios SET ? WHERE idcomentarios = ?',
            [comentario, id_comentario],
            (err, result) => {
                if (err) {
                    console.log(err);
                    resp.status(500).end();
                } else {
                    resp.status(200).end();
                }
            });
    });

    router.delete('/comentario/:id', (req, resp) => {
        let id_comentario = req.params.id;
        connection.query('DELETE FROM comentarios WHERE idcomentario = ?',
            [id_comentario],
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
