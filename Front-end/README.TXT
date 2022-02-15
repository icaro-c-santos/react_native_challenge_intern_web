
JA DEIXEI CONFIGURADAS POREM CASO DE PROBLEMA, É BOM CONFIGUAR AS SEGUINTES CONSTANTES.

PORTA DO SERVIDOR NA CONSTANTE PORT NO ARQUIVO SERVIDOR.JS;
URL DO SERVIDOR NA CONSTANTE SERVER NO ARQUIVO CADASTRO;JS;
URL DO SERVIDOR NA CONSTANTE SERVER NO ARQUIVO LOGIN.JS;
URL DO SERVIDOR NA CONSTANTE SERVER NO ARQUIVO ARTIGOS.JS;

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

COMO ESTE PROJETO FOI PENSADO?

login.js: codigo javascript da pagina login, ele é responsavel por fazer a requisição de login pro servidor e validar ou não o usuario.
cadastro.js:  codigo javascript da pagina cadastro, ele é responsavel por fazer a requisição para cadastrar um usuario pro servidor e retorna se o usuario foi ou nao craido.
artigo.js: codigo javascript da pagina artigos, ele é responsavel por fazer uma requisição pro servidor pedindo os artigos construir os elementos html dos artigos e injetar eles na pagina;
A pagina web faz as requisições de login,cadastro e obter artigos para o servidor.js
servidor.js: codigo javascript responsavel por receber as solicitações validar o usuario, cadastrar o usuario, fazer uma requisição para a API da HealthCare retornar os dados para
a construção da pagina artigo;



FALTA FAZER?

responsividade tela artigos;
funcionalidade obter artigos filtrar;