const local = "http://localhost:3001/artigos";
const url = 'https://www.healthcare.gov/api/articles.json';

async function buscarArtigo(){
   const result =  await fetch(local,{
        method: "GET",
        body: JSON.stringify(),
    })
    return result.json();
}

const artigo = {
    "date": "2021-03-19 00:00:00 +0000",
    "url": "/es/more-savings/",
    "content": "<div class=\"box-content \" role=\"complementary\"><span class='sr-only'></span><p><strong>¿Aún necesita cobertura médica para 2022?</strong></p>\n\n<p>La Inscripción Abierta ha terminado. Todavía puede obtener un seguro médico para 2022 de 2 maneras:</p>\n\n<ul>\n<li>Si califica para un <a href=\"/es/coverage-outside-open-enrollment/special-enrollment-period\">Período Especial de Inscripción</a> debido a un <a href=\"/es/glossary/qualifying-life-event\" title=\"glossary\">evento de su vida</a> como perder otra cobertura, casarse o tener un bebé.</li>\n<li>Si califica para <a href=\"/es/medicaid-chip/getting-medicaid-chip\">Medicaid o el Programa de Seguro Médico para Niños (CHIP)</a>. Puede solicitar estos programas en cualquier momento.</li>\n</ul>\n\n<div><a class=\"btn\" href=\"/es/screener\">CONSULTE SI PUEDE OBTENER COBERTURA PARA 2022</a></div><span class='sr-only'></span></div>\n\n\n<p>Es posible que pueda obtener más ahorros y costos más bajos en la cobertura de seguro médico del Mercado debido a la Ley del Plan de Rescate Estadounidense de 2021. Bajo la nueva ley:</p>\n\n<ul>\n<li>Más personas que nunca calificarán para recibir ayuda para pagar la cobertura médica, incluso aquellas que no eran elegibles en el pasado.</li>\n<li>La mayoría de las personas actualmente inscritas en un plan del Mercado pueden calificar para más créditos fiscales.</li>\n<li><a href=\"/es/glossary/premium\" title=\"glossary\">Las primas del</a> seguro médico después de estos nuevos ahorros bajarán.</li>\n</ul>\n\n\n<h2>Cómo saber si califica para los ahorros del Mercado</h2>\n\n<p>Cuando solicite la cobertura del Mercado, sabrá si califica para <a href=\"/es/glossary/premium-tax-credit\" title=\"glossary\">un crédito fiscal para la prima</a> para reducir su prima mensual.</p>\n\n<p>La cantidad de su crédito fiscal para la prima depende del ingreso familiar estimado para 2022 que ingresó en su solicitud del Mercado.</p>\n\n<p><strong><a href=\"/es/lower-costs/\">Averigüe si sus ingresos estimados para 2022 están en el rango para calificar para un crédito fiscal para primas.</a></strong></p>\n\n<h2>Si su estado no usa CuidadoDeSalud.gov</h2>\n\n<p>Visite el sitio web de su Mercado estatal o comuníquese con su centro de llamadas para obtener más información sobre cuándo estarán disponibles estos ahorros adicionales a través de su Mercado.</p>\n\n<p><strong>¿No está seguro de qué sitio web usa su estado?</strong> <a href=\"/es/get-coverage/\">Seleccione su estado para averiguarlo.</a></p>\n",
}


    const titulo = document.createElement("h3").innerText= "DATA: "+ artigo.date;
    const link = document.createElement("a").href = ""+url+artigo.url+"";
    document.getElementById("artigosTela").append(titulo);
    document.getElementById("artigosTela").append(link);
    document.getElementById("artigosTela").innerHTML = artigo.content;




//const artigos = await axios.get(local).then(console.log);
//export default buscarArtigo;