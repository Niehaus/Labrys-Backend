insert into cadastro_voluntarios values (null,"barbara",1,"3333",1);
insert into cadastro_voluntarios values (null,"dezaine",2,"2424",2);
insert into cadastro_voluntarios values (null,"afg",2,"2424",null);

insert into rede_social values(null,"yayboechat","bb","33");
insert into tipo_ajuda values(null,"psico","blablabla");

insert into rede_social values(null,"dezaines","dd","24");
insert into tipo_ajuda values(null,"psico2","blablabla2");

select nome,telefone,tipo_da_ajuda,descr_funcionamento,twitter_user,fb_link,wpp_num  from cadastro_voluntarios, tipo_ajuda, rede_social where tipo_ajuda = idtipo_ajuda and rede_social = idrede_social;


select * from cadastro_voluntarios, tipo_ajuda, rede_social; 
