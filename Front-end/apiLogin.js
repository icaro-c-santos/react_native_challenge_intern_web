
import fetch from "node-fetch";
const url = 'https://www.healthcare.gov/api/articles.json';
const host = "https://www.cuidadodesalud.gov"

async function getArtigos(){

  const result = await fetch("https://www.healthcare.gov/api/articles.json",{
    method: "GET", 
    headers: {
        
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    })

    return await result.json();
 
}


