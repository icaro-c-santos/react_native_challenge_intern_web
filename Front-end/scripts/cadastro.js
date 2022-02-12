import criarUsuario from "../apiLogin.js";

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
        await criarUsuario(email,nome,senha);
        window.location.href="./login.html";
        alerte("USUARIO CRIADO COM SUCESSO!");
    }catch(error){
        alerte(error.message || "ERRO NO SERVIDOR!")             
    }
         

}

document.getElementById('entrar').onclick = function(){
    cadastro();
}

export default cadastro;

