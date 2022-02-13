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
function validNome(nome){
    return true
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(senha)
}


async function cadastro(){


    const email =  document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const nome = document.getElementById("nome").value;
    const body = {email: "icaro", senha: "32", nome: "pedro"}

    try {
        if(!validEmail(email)){ throw new Error("EMAIL INVALIDO!")};
        if(!validNome(nome)){ throw new Error("NOME INVALIDO!")};
        if(!validSenha(senha)){ throw new Error("SENHA INVALIDA!")};
       const result = await fetch(server+"/cadastro",{
        method: "POST", 
        headers: {
            
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
         body: JSON.stringify(body),
        });
        if(result.status != 201){ throw new Error("ERRO!: USUARIO NÃO CRIADO!")};
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

