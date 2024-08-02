const botoes = document.querySelectorall(".botao");
const textos  = document .querySelectorAll(".aba-conteudo");

const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onlick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");


            botoes[i].classList.add("ativo");
            textos[i].classList.add("ativo");
        }
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date ();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
