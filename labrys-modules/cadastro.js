const express = require('express');

module.exports = (connection) => {
    const router = express.Router();

    //cadastro dos voluntários
    router.get('/cadastro/:id', (req, resp) => {
        let id_cadastro = req.params.id;
        connection.query("SELECT nome,telefone,tipo_da_ajuda,descr_funcionamento,twitter_user,fb_link,wpp_num FROM cadastro_voluntarios,tipo_ajuda, rede_social WHERE idcadastro_voluntario = ? and tipo_ajuda = idtipo_ajuda and rede_social = idrede_social",
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
        let cadastro = req.body.User;
        let ajuda = req.body.Ajuda;
        let rede_social = req.body.RedeSocial;
        var idtipo_ajuda = 0, idrede_social = 0;
        console.log(req.body);
        console.log(req.body.User);

        if (cadastro == null) {
            resp.status(204).end();
        } else {   
            connection.query("INSERT INTO tipo_ajuda SET ?",
                [ajuda],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        resp.status(500).end();
                    } else {
                        console.log(result.insertId);
                        idtipo_ajuda = result.insertId;
                        cadastro.tipo_ajuda = idtipo_ajuda;
                        console.log(cadastro);
                        connection.query("INSERT INTO rede_social SET ?",
                            [rede_social],
                            (err, result) => {
                                if (err) {
                                    console.log(err);
                                    resp.status(500).end();
                                } else {
                                    console.log(result.insertId);
                                    idrede_social = result.insertId;
                                    cadastro.rede_social = idrede_social;
                                    console.log(cadastro);
                                    connection.query("INSERT INTO cadastro_voluntarios SET ?",
                                        [cadastro],
                                        (err, result) => {
                                            if (err) {
                                                console.log(err);
                                                resp.status(500).end();
                                            } else {
                                                console.log(result.insertId);
                                                console.log(cadastro);
                                                
                                                resp.status(200);
                                            }
                                        });
                                    
                                    resp.status(200);
                                }
                            });
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