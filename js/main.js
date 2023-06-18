const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

//vai fazer uma array com todos os elementos que contém .controle-ajuste

//console.log(controle.length) //quantidade de itens do array

controle.forEach( (elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode)
    atualizaEstatistica(evento.target.dataset.peca)
    

  })
})
//vai mostrar o evento para cada clique nos botões dos itens da array controle

// somar.addEventListener("click", () => {manipulaDados("somar")})

// subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

// function manipulaDados(operacao) {
//   if(operacao === "subtrair") {
//       braco.value = parseInt(braco.value) - 1
//   } else {
//       braco.value = parseInt(braco.value) + 1
//   }
// }

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]")
  if(operacao === "-") {
      peca.value = parseInt(peca.value) - 1
  } else {
      peca.value = parseInt(peca.value) + 1
  }
}

function atualizaEstatistica(peca) {
  estatistica.forEach( (elemento ) => {
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}

function trocaImagem(cor){
  document.querySelector(".robo").src="img/robotron" + cor + ".png";
}