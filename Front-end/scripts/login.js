const server = "http://localhost:3002";   ///u

    function alerte(mensagem) {

        const alert = document.getElementsByClassName("help")[0];
        alert.setAttribute("id","help");
        alert.innerText = mensagem;
    }
    


    function validEmail(email){
        return email.length;
    }
    
    
    function validSenha(senha){
        return senha.length;
    }
    

    async function login(){
        
        const email =  document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const body = { email:email, senha: senha}
       
        try {
        
             if(!validEmail(email)){ throw new Error("PREENCHA O CAMPO EMAIL!")};
             if(!validSenha(senha)){ throw new Error("PREENCHA O CAMPO SENHA!")};
             const result = await fetch(server+"/login",{
                method: "POST", 
                headers: {
                    
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                 body: JSON.stringify(body),
                }).catch(error => {throw new Error("ERRO NO SERVIDOR!: TENTE MAIS TARDE.")});

             if(result.status != 200){ throw new Error("USUARIO OU SENHA INVALIDO!")};
             return true;
         }catch(error){
             throw error;            
         }
                
    }

 
    
    document.getElementById('entrar').onclick = function(){
  
        const form = document.getElementById("form");
        const botaoFinalizar = document.getElementById('entrar');
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");
        
        email.setAttribute("readOnly","true");
        senha.setAttribute("readOnly","true");
    
        form.removeChild(botaoFinalizar);

        var nodeImg = document.createElement("img");
        nodeImg.setAttribute("id","carregar");
        nodeImg.setAttribute("src","../pictures/carregar.png");
        form.append(nodeImg);

        login().then(e => window.location.href="./artigos.html")
        .catch( error =>{
            alerte(error.message || "ERRO NO SERVIDOR!");
            form.removeChild(nodeImg);
            senha.value = "";
            email.removeAttribute("readOnly");
            senha.removeAttribute("readOnly");
            form.append(botaoFinalizar);
        });
    
    
    
    }

export default login;




