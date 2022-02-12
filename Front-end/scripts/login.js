function alerte(mensagem){
        alert(mensagem);
}

async function loginUsuario(email,senha){
        const user = email;
        user.passowrd = senha;
        // await doLogin(user);
        return true;
}


function validEmail(email){
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
    }
    
function validSenha(senha){
        return true
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(senha)
    }
    

 async function login(){
        
        const form = document.getElementById("form");
        const formData = new FormData(form);
        const email = formData.get("email");
        const senha = formData.get("senha");

        try {
        
             if(!validEmail(email)){ throw new Error("EMAIL INVALIDO!")};
             if(!validSenha(senha)){ throw new Error("SENHA INVALIDA!")};
             await loginUsuario(email,senha);
             window.location.href="./artigos.html";

         }catch(error){
             alerte(error.message || "ERRO NO SERVIDOR!")             
         }
                

}




