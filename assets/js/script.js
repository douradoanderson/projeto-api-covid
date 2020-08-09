var P = document.querySelector("#resultP")
var NC = document.getElementById("#resultNC")
var CA = document.querySelector("#resultCA")
var CC = document.querySelector("#resultCC")
var CR = document.querySelector("#resultCR")
var TC = document.querySelector("#resultTC")
var NM = document.querySelector("#resultNM")
var TM = document.querySelector("#resultTM")

fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "8e95a9ef0dmsh0ea0003b87891f3p109739jsn2ac19ca67290"
	}
})
.then(function(response) {
    return response.json();
})

.then(function(dados) {
    console.log(dados)
    let populacao = JSON.stringify(dados.response[19].population)
    let casosAtivos = JSON.stringify(dados.response[19].cases.active)
    let casosCriticos = JSON.stringify(dados.response[19].cases.critical)
    let casosRecuperados = JSON.stringify(dados.response[19].cases.recovered)
    let totalDeCasos = JSON.stringify(dados.response[19].cases.total)
    let novasMortes = JSON.stringify(dados.response[19].deaths.new)
    let totalDeMortes = JSON.stringify(dados.response[19].deaths.total)
    console.log("População:" + populacao)
    console.log("Casos Ativos:" + casosAtivos)
    console.log("Casos Críticos:" + casosCriticos)
    console.log("Casos Recuperados:" + casosRecuperados)
    console.log("Total de casos:" + totalDeCasos)
    console.log("Casos Recuperados:" + novasMortes)
    console.log("Total de casos:" + totalDeMortes)
    resultP.innerHTML =  populacao;
    resultCA.innerHTML = casosAtivos;
    resultCC.innerHTML = casosCriticos;
    resultCR.innerHTML = casosRecuperados;
    resultTC.innerHTML = totalDeCasos;
    resultNM.innerHTML = novasMortes;
    resultTM.innerHTML = totalDeMortes;
 })

.catch(err => {
	console.log(err);
});


