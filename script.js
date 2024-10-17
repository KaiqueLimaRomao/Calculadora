//Função para que os números digitados apareçam na tela.
function aparecer (num){
    document.querySelector(".tela").innerHTML += num;
}

//Função que apaga todo resultado ou oque foi digitado da tela.
function LimparTela (){
    document.querySelector(".tela").innerHTML = ""
}

//função para apagar um caracterer por vez da tela.
function apagar (){
let tela = document.querySelector(".tela").innerHTML
    document.querySelector(".tela").innerHTML = tela.substring(0, tela.length-1) 
}

function calculando(){
    let tela = document.querySelector(".tela").innerHTML;
    if (tela) {
        document.querySelector(".tela").innerHTML=eval(tela);
    } else {
        document.querySelector(".tela").innerHTML= "";
    }
   
}