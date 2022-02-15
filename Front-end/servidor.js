import  express from "express";
import cors from "cors";
import fetch from "node-fetch";

const PORTA  = 3002;  //DEFINIR PORTA


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

    banco.push(novoUsuario);
    res.status(201).send();
})

app.post("/login",(req,res,next)=>{
    
    const email = req.body.email;
    const senha = req.body.senha;
    const result =  banco.filter(user => user.email == email && user.senha == senha);
    if(result.length>0){
        res.status(200).json("USUARIO LOGADO!");
    }else{
        res.status(404).json("USUARIO OU SENHA INCORRETO!",)
    }
   
})
   
app.get("/artigos",async (req,res,next)=>{

        const result = await fetch("https://www.healthcare.gov/api/articles.json",{
          method: "GET", 
          headers: {
              
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          })
      
       const retorno =   await result.json();
       res.status(200).json(retorno);
       
})


app.listen(PORTA,() =>{
    console.log("SERVIDOR ATIVO NA PORTA "+PORTA);
});

