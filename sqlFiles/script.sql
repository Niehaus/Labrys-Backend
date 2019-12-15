insert into cadastro_voluntarios values (null,"barbara",1,"3333",1);
insert into cadastro_voluntarios values (null,"dezaine",20,"2424",9);
insert into cadastro_voluntarios values (null,"afg",2,"2424",null);

select * from denuncias;

insert into rede_social values(null,"yayboechat","bb","33");
insert into tipo_ajuda values(null,"psico","blablabla");

insert into rede_social values(null,"dezaines","dd","24");
insert into tipo_ajuda values(null,"psico2","blablabla2");

select nome,telefone,tipo_da_ajuda,descr_funcionamento,twitter_user,fb_link,wpp_num  from cadastro_voluntarios, tipo_ajuda, rede_social where tipo_ajuda = idtipo_ajuda and rede_social = idrede_social;

SELECT nome,telefone,tipo_da_ajuda,descr_funcionamento,twitter_user,fb_link,wpp_num FROM cadastro_voluntarios,tipo_ajuda, rede_social WHERE tipo_ajuda = idtipo_ajuda and rede_social = idrede_social;
select * from cadastro_voluntarios, tipo_ajuda, rede_social; 

select tipo_ajuda, rede_social FROM cadastro_voluntarios WHERE idcadastro_voluntario = 17;

SELECT tipo_ajuda FROM cadastro_voluntarios WHERE idcadastro_voluntario = 16;

DELETE rede_social, tipo_ajuda FROM rede_social INNER JOIN tipo_ajuda WHERE idrede_social = (SELECT rede_social FROM cadastro_voluntarios WHERE idcadastro_voluntario = 17) and idtipo_ajuda = (SELECT tipo_ajuda FROM cadastro_voluntarios WHERE idcadastro_voluntario = 17);

DELETE FROM tipo_ajuda WHERE idtipo_ajuda in (SELECT tipo_ajuda FROM cadastro_voluntarios WHERE idcadastro_voluntario = 17);
DELETE FROM cadastro_voluntarios WHERE idcadastro_voluntario = 17;

insert into depoimentos values(null,"meu depo é", "barb", 22);
insert into depoimentos values(null,"meu depo é", "dezaine", 22);
insert into depoimentos values(null,"meu depo é", "rhayssa", 48);
insert into depoimentos values(null,"meu depo é", "ana", 20);


select apelido, depoimentos.idade, comentario, nickname, comentarios.idade, depoimento_associado from comentarios, depoimentos where depoimento_associado = iddepoimentos; 


insert into comentarios values(null,"comentariooo22213", "elcio", 20,1);
insert into comentarios values(null,"comentario importante", "elcio", 20,2);
insert into comentarios values(null,"comentario importante", "rogi", 20,2);
insert into comentarios values(null,"comentario importante", "rogi", 20,3);

UPDATE tipo_ajuda SET tipo_da_ajuda = "ajudar", descr_funcionamento = "ajudar com" WHERE idtipo_ajuda = (SELECT tipo_ajuda FROM cadastro_voluntarios WHERE idcadastro_voluntario = 16);

SET time_zone = 'Europe/Helsinki';
SET time_zone = "+00:00";
SET @@session.time_zone = "+00:00";