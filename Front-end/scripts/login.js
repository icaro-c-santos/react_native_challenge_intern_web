const server = "http://localhost:3002";

function alerte(mensagem){
        alert(mensagem);
}


function validEmail(email){
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
    }
    
function validSenha(senha){
        return true
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(senha)
    }
    

 async function login(){
        
        const email =  document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const body = { email:email, senha: senha}
       

        try {
        
             if(!validEmail(email)){ throw new Error("EMAIL INVALIDO!")};
             if(!validSenha(senha)){ throw new Error("SENHA INVALIDA!")};
             const result = await fetch(server+"/login",{
                method: "POST", 
                headers: {
                    
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                 body: JSON.stringify(body),
                });

             if(result.status != 200){ throw new Error("USUARIO OU SENHA INVALIDO!")};
              window.location.href="./artigos.html";
         }catch(error){
             alerte(error.message || "ERRO NO SERVIDOR!")             
         }
                
}

document.getElementById('entrar').onclick = function(){
    login();
}

export default login;




