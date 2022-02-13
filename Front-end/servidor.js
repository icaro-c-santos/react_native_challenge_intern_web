import  express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const url = 'https://www.healthcare.gov/api/articles.json';
const banco = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req,res,next)=>{
    res.header( "Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
})



app.post("/cadastro",async(req,res,next)=>{
    
    const email = req.body.email;
    const senha = req.body.senha;
    const nome = req.body.nome;

   const novoUsuario = {
        email:email,
        senha: senha,
        nome: nome
    }
    console.log(novoUsuario)

    banco.push(novoUsuario);
    res.status(201).send();

})

app.post("/login",(req,res,next)=>{
    
    const email = req.body.email;
    const senha = req.body.senha;
    const result =  banco.filter(user => user.email == email && user.senha == senha);
   console.log(banco);
    if(result.length>0){
        res.status(200).json("USUARIO LOGADO!");
    }else{
        res.status(404).json("USUARIO OU SENHA INCORRETO!",)
    }
   
})
   
app.get("/artigos",async (req,res,next)=>{
    
    const artigos = await axios.get(url).then(res => res.data);
    
    res.status(200).json(artigos);
})


app.listen(3002,() =>{
    console.log("SERVIDOR ATIVO!");
});

