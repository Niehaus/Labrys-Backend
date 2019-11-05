const express = require('express');

module.exports = (connection) => {
    const router = express.Router();

    //login_adm
    router.get('/login/:id', (req, resp) => {
        let id_login = req.params.id;
        connection.query("SELECT * FROM login_adm WHERE idlogin_adm = ?",
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

    router.post('/login', (req, resp) => {
        let login = req.body;
        if (login == null) {
            resp.status(204).end();
        } else {
            connection.query("INSERT INTO login_adm SET ?",
                [login],
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

    router.put('/login/:id', (req, resp) => {
        let id_login = req.params.id;
        let login = req.body;
        cadastro.idcadastro_voluntario = id_cadastro;
        connection.query('UPDATE login_adm SET ? WHERE idlogin_adm = ?',
            [login, id_login],
            (err, result) => {
                if (err) {
                    console.log(err);
                    resp.status(500).end();
                } else {
                    resp.status(200).end();
                }
            });
    });

    router.delete('/login/:id', (req, resp) => {
        let id_login = req.params.id;
        connection.query('DELETE FROM login_adm WHERE idlogin = ?',
            [id_login],
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