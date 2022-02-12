function alerte(mensagem){
    alert(mensagem);
}

async function criarUsuario(email,senha,nome){
    const user = email;
    user.passowrd = senha;
    user.name = nome;
    //const result = await doCreateUser(user);
    return true;
}


function validEmail(email){
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
}

function validSenha(senha){
    return true
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(senha)
}
function validNome(nome){
    return true
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(senha)
}



async function cadastro(){


    const form =  document.getElementById("form");
    const formData = new FormData(form);
    const email = formData.get("email");
    const nome = formData.get("nome");
    const senha = formData.get("senha");

   
    try {
        
        if(!validEmail(email)){ throw new Error("EMAIL INVALIDO!")};
        if(!validNome(nome)){ throw new Error("NOME INVALIDO!")};
        if(!validSenha(senha)){ throw new Error("SENHA INVALIDA!")};
        await criarUsuario(email,senha,nome);
        window.location.href="./login.html";
    }catch(error){
        alerte(error.message || "ERRO NO SERVIDOR!")             
    }
         

}

