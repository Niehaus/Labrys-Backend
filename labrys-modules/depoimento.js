const express = require('express');

module.exports = (connection) => {
    const router = express.Router();

     //depoimentos
     router.get('/depoimento/:id', (req, resp) => {
         let id_depoimento = req.params.id;
         connection.query("SELECT * FROM depoimentos WHERE iddepoimentos = ?",
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

       router.get('/depoimento', (req, resp) => {
           connection.query("SELECT * FROM depoimentos",
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

     router.post('/depoimento', (req, resp) => {
         let depoimento = req.body;
         if (depoimento == null) {
             resp.status(204).end();
         } else {
             connection.query("INSERT INTO depoimentos SET ?",
                 [depoimento],
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

     router.put('/depoimento/:id', (req, resp) => {
         let id_depoimento = req.params.id;
         let depoimento = req.body;
         cadastro.idcadastro_voluntario = id_cadastro;
         connection.query('UPDATE depoimentos SET ? WHERE iddepoimentos = ?',
             [depoimento, id_depoimento],
             (err, result) => {
                 if (err) {
                     console.log(err);
                     resp.status(500).end();
                 } else {
                     resp.status(200).end();
                 }
             });
     });

     router.delete('/depoimento/:id', (req, resp) => {
         let id_depoimento = req.params.id;
         connection.query('DELETE FROM depoimentos WHERE iddepoimento = ?',
             [id_depoimento],
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