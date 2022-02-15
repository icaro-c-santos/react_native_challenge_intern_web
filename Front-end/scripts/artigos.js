
const server = "http://localhost:3002"; // URL DO SERVIDOR PARA REQUISIÇÕES
const host = "https://www.cuidadodesalud.gov"  // dominio da API HEALTCARE



async function buscarArtigos() {
    const result = await fetch(server+"/artigos", {
        method: "GET",
        body: JSON.stringify(),
    })
    return result.json();
    
}


function convertData(data) {
    return new Date(data).toDateString();
}

function convertUrl(url) {
    return host + url;
}

function compareData(valor1,valor2){ ///retorna true se o primeiro valor for maior ou igual ao segundo

  const data = new Date(valor1);
  const data2 = new Date(valor2);
  return data.getTime() >= data2.getTime()

}


function contem(palavra,texto){
  const str = new RegExp(palavra,"i");
   return str.test(texto);
}


async function addArtigo(artigoItem) {

    const main = document.getElementsByTagName("main")[0];
    const link = document.createElement("a");
    const artigo = document.createElement("div");
    const titulo = document.createElement("h2");
    const data = document.createElement("h3");
    const vermais = document.createElement("p");

    link.setAttribute("id","link");
    artigo.setAttribute("id","artigo");
    titulo.setAttribute("id","titulo");
    data.setAttribute("id","data");

    link.href = artigoItem.url;
    link.target = "_blank";
    titulo.innerText = artigoItem.title;
    data.innerText = artigoItem.date;
    vermais.innerText = "Ver Artigo";
    artigo.append(data,titulo,vermais);
    link.append(artigo);
    main.append(link);
}


async function obterArtigos(){

   const dados =  await buscarArtigos();
   await dados.articles.forEach(artigo=> {
         artigo.date = convertData(artigo.date);
        artigo.url = convertUrl(artigo.url);
   })

  return dados.articles;
}




obterArtigos().then(artigo => {      ///INICIAR OS ARTIGOS
  
  const art = document.getElementById("artigo");
  if(art){ document.getElementById("main").innerText = ""} 
  artigo.forEach(addArtigo);

})




//--------------------FUNÇÕES DE ESCUTA--------------------///




document.getElementById('pesquisar').onclick = async () => { // FILTRA OS ARTIGOS

  try {
    const artigos = await obterArtigos();
    const art = document.getElementById("artigo");
    if(art){ document.getElementById("main").innerText = ""}


    if(document.getElementById("filtro").value === "Data"){

      const campodata1 = document.getElementsByClassName("original")[0]; 
      const campodata2 = document.getElementsByClassName("segundo")[0];
        
      
      if(!campodata1 || !campodata2 || !campodata1.value || !campodata2.value){ 
         artigos.forEach(addArtigo);
      }else{

        let dataMenor = campodata2.value;
        let dataMaior = campodata1.value;

        if(!compareData(dataMaior,dataMenor)) {  /// TROCA AS DATAS PARA CASO O USUARIO TENHA DIGITADO EM CAMPOS DIFERENTES
          let aux = dataMaior;
          dataMaior = dataMenor;
          dataMenor = aux;
        }

        artigos.forEach(artigo =>{
           if(compareData(artigo.date,dataMenor) && compareData(dataMaior,artigo.date)){
              addArtigo(artigo)
            }
        });

       }

    }else{
    
      const texto = await document.getElementById("texto").value;
      if(texto.length <= 0) {
         artigos.forEach(addArtigo);
      
      }else{
         artigos.forEach(artigo => {
           if(contem(texto,artigo.title)){
              addArtigo(artigo)
            }
          
          });
      }
    }

  } catch (error) {
    alert("SENTIMOS MUITO MAIS DEVIDO A UM PROBLEMA NO SERVIDOR NOSSO ARTIGOS ESTÃO INDISPONÍVEIS! :)")
  }

}




document.getElementById("texto").oninput =async() =>{    /// TRAZ OS ARTIGOS DE VOLTA QUANDO O CAMPO PESQUISA É VAZIO
    if(!document.getElementById("texto").value){
      const art = document.getElementById("artigo");
      if(art){ document.getElementById("main").innerText = ""} 
      obterArtigos().then(artigo => {artigo.forEach(addArtigo)})
    }
}






document.getElementById("filtro").oninput = async() =>{  /// MONITORA O LAYOUTE DO FORMULARIO E MUDA DE ACORDO COM A OPÇÃO DE FILTRAGEM

  const art = document.getElementById("artigo");
  if(art){ document.getElementById("main").innerText = ""}
  obterArtigos().then(artigos=> artigos.forEach(addArtigo));
  
  const opcao = document.getElementById("filtro").value;

  if(opcao === "Data"){
    
    const texto = document.getElementsByClassName("original")[0];
    const campo = document.getElementById("campoTexto");
    const tex2 = document.createElement("input");

    tex2.setAttribute("id","textoData");
    tex2.setAttribute("class","segundo");
    tex2.type = "date";
   
    texto.setAttribute("id","textoData");
    texto.value = "";
    texto.type ="date"
    
    campo.append(tex2);
    
  }else{

    const texto = document.getElementsByClassName("original")[0];
    const texto2 = document.getElementsByClassName("segundo")[0];

    texto.type="text";
    texto.value="";
    texto.setAttribute("id","texto");
    if(texto2){texto2.remove()}

  }
    
    
    


}