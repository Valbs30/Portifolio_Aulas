console.log("calcular orcamento")

// Manipulação do DOM
let inputQuantidade = document.querySelector("#quantidade")
    //console.log(quantidade)
let inputJS = document.querySelector("#JS")
let inputLayout = document.querySelector("#layout-sim")
let inputLayoutNao = document.querySelector("#layout-nao")
let inputPrazo = document.querySelector("#prazo")

inputQuantidade.addEventListener("change", atualizarOrcamento)
inputJS.addEventListener("change", atualizarOrcamento)
inputLayout.addEventListener("change", atualizarOrcamento)
inputLayoutNao.addEventListener("change", atualizarOrcamento)
inputPrazo.addEventListener("change", atualizarOrcamento)

function atualizarOrcamento(){
    let preco = inputQuantidade.value * 100
    let JS = inputJS.checked
    let layout = inputLayout.checked
    let prazo = inputPrazo.value

    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML = `Prazo (${prazo} semanas)` //template literais
        //labelPrazo.innerHTML = "Prazo (" + prazo + " semanas)"
        //console.log(preco)

    if(JS) preco *= 1.1
    if(layout) preco += inputQuantidade.value * 30
    let taxaDeUrgencia = 1 - prazo * .05
    preco *= 1 + taxaDeUrgencia

    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
}