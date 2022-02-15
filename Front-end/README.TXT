
JA DEIXEI CONFIGURADAS POREM CASO DE PROBLEMA, É BOM CONFIGUAR AS SEGUINTES CONSTANTES.

PORTA DO SERVIDOR NA CONSTANTE PORT NO ARQUIVO SERVIDOR.JS;
URL DO SERVIDOR NA CONSTANTE SERVER NO ARQUIVO CADASTRO;JS;
URL DO SERVIDOR NA CONSTANTE SERVER NO ARQUIVO LOGIN.JS;
URL DO SERVIDOR NA CONSTANTE SERVER NO ARQUIVO ARTIGOS.JS;

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

COMO ESTE PROJETO FOI PENSADO?

Eu tive alguns problemas com o react e o typescript pra integrar com o meu web-site então após perguntar a um dos avaliadores e ele assim autorizar criar minhas proprias funcoes, 
criei um servidor no arquivo servidor.js pra simular o servidor de login/cadastro e para fazer as requisicoes da healtcare.

login.js: codigo javascript da pagina login, ele é responsavel por fazer a requisição de login pro servidor e validar ou não o usuario.

cadastro.js:  codigo javascript da pagina cadastro, ele é responsavel por fazer a requisição para cadastrar um usuario pro servidor e retorna se o usuario foi ou nao craido.

artigo.js: codigo javascript da pagina artigos, ele é responsavel por fazer uma requisição pro servidor pedindo os artigos construir os elementos html dos artigos e injetar eles na pagina;

A pagina web faz as requisições de login,cadastro e obter artigos para o servidor.js

servidor.js: codigo javascript responsavel por receber as solicitações validar o usuario, cadastrar o usuario, fazer uma requisição para a API da HealthCare retornar os dados para
a construção da pagina artigo;


O QUE PODE MELHORAR:

PODERIA MELHORAR A IMPLEMENTAÇÃO DA FUNÇÃO DE BUSCA (REGEX) POIS ELA ESTÁ BUSCANDO O TEXTO DENTRO DE PALAVRAS EX: SIM BUSCA "SIM"PATICO "SIM"PLES EM VEZ DE SOMENTE A PALAVRA SIM.
PERMITIR A BUSCA DE TITULO E DATA EM CONJUNTO.
IMPLEMENTAR UMA ROTA DE GET COM PARAMETROS NO SERVIDOR PARA NÃO FICAR TRAZENDO TODO O GET DA HEALTCARE.