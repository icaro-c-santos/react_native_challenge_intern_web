const banco =[];



async function criarUsuario(email,senha,nome){

    const novousuario ={
        email: email,
        senha: senha,
        nome: nome
    }
    banco.push(novousuario);
    return true
}


async function buscarUsuario(email,senha,nome){
    
}
