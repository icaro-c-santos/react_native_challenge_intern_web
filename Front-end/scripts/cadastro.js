const server = "http://localhost:3002";


function alerte(mensagem) {

    const alert = document.getElementsByClassName("help")[0];
    alert.setAttribute("id","help");
    alert.innerText = mensagem;
}

function alertSucesso(mensagem){
    
    const alert = document.getElementsByClassName("help")[0];
    alert.setAttribute("id","helpSucesso");
    alert.innerText = mensagem;
}


function validEmail(email) {
    return /^[\w-._+]+@[\w_+.-]+\.[\a-z]/gm.test(email)
}

function validSenha(senha) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@$%&*-+])[0-9a-zA-Z!@$%&*-+]{8,}$/.test(senha);
}

function validNome(nome) {
    return nome.length;
}


async function cadastro() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const nome = document.getElementById("nome").value;
    const body = { email: email, senha: senha, nome: nome }

    try {
        if (!validNome(nome)) { throw new Error("PREENCHA O CAMPO NOME!") };
        if (!validEmail(email)) { throw new Error("FORMATO DE EMAIL INVALIDO!") };
        if (!validSenha(senha)) { throw new Error("A senha deve conter 8 digitos ou mais e pelo menos:\n1 - Número \n1 - Caractere do tipo: !@$%&*-+ \n1 - Caractere maiúsculo \n1 - Caractere minúsculo") };
        const result = await fetch(server + "/cadastro", {
            method: "POST",
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body),
        }).catch(error => {throw new Error("ERRO NO SERVIDOR!: USUARIO NÃO CRIADO!")});
        if (result.status != 201) { throw new Error("ERRO!: USUARIO NÃO CRIADO!") };
        return true;
    } catch (error) {
        throw error;
    }


}


document.getElementById('entrar').onclick = function () {

    const form = document.getElementById("form");
    const botaoFinalizar = document.getElementById('entrar');
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    nome.setAttribute("readOnly", "true");
    email.setAttribute("readOnly", "true");
    senha.setAttribute("readOnly", "true");

    form.removeChild(botaoFinalizar);

    var nodeImg = document.createElement("img");
    nodeImg.setAttribute("id", "carregar");
    nodeImg.setAttribute("src", "../pictures/carregar.png");
    form.append(nodeImg);

    cadastro().then(res => {
        alertSucesso("USUARIO CADASTRADO COM SUCESSO!");
        form.removeChild(nodeImg);
        setTimeout(() => {window.location.href = "./login.html"},2000);
    }).catch(error => {
            alerte(error.message || "ERRO NO SERVIDOR!")
            form.removeChild(nodeImg);
            senha.value = "";
            nome.removeAttribute("readOnly");
            email.removeAttribute("readOnly");
            senha.removeAttribute("readOnly");
            form.append(botaoFinalizar);
        });

}


export default cadastro;

