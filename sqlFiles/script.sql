insert into cadastro_voluntarios values (null,"barbara",1,"3333",1);
insert into cadastro_voluntarios values (null,"dezaine",2,"2424",2);
insert into cadastro_voluntarios values (null,"afg",2,"2424",null);

insert into rede_social values(null,"yayboechat","bb","33");
insert into tipo_ajuda values(null,"psico","blablabla");

insert into rede_social values(null,"dezaines","dd","24");
insert into tipo_ajuda values(null,"psico2","blablabla2");

select nome,telefone,tipo_da_ajuda,descr_funcionamento,twitter_user,fb_link,wpp_num  from cadastro_voluntarios, tipo_ajuda, rede_social where tipo_ajuda = idtipo_ajuda and rede_social = idrede_social;


select * from cadastro_voluntarios, tipo_ajuda, rede_social; 

select tipo_ajuda, rede_social FROM cadastro_voluntarios WHERE idcadastro_voluntario = 17;

SELECT tipo_ajuda FROM cadastro_voluntarios WHERE idcadastro_voluntario = 16;

DELETE rede_social, tipo_ajuda FROM rede_social INNER JOIN tipo_ajuda WHERE idrede_social = (SELECT rede_social FROM cadastro_voluntarios WHERE idcadastro_voluntario = 17) and idtipo_ajuda = (SELECT tipo_ajuda FROM cadastro_voluntarios WHERE idcadastro_voluntario = 17);

DELETE FROM tipo_ajuda WHERE idtipo_ajuda in (SELECT tipo_ajuda FROM cadastro_voluntarios WHERE idcadastro_voluntario = 17);
DELETE FROM cadastro_voluntarios WHERE idcadastro_voluntario = 17;


UPDATE tipo_ajuda SET tipo_da_ajuda = "ajudar", descr_funcionamento = "ajudar com" WHERE idtipo_ajuda = (SELECT tipo_ajuda FROM cadastro_voluntarios WHERE idcadastro_voluntario = 16);