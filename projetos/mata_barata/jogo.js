var altura = 0
var largura = 0
var vidas = 1
var tempo = 30
var criaBarataTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'Normal'){
    criaBarataTempo = 2500

} else if (nivel === 'Dificil'){
    criaBarataTempo = 1500
    

} else if (nivel === 'Expert') {
     criaBarataTempo = 900
}

function ajustaTamanhoPalcoJogo(){
 altura = window.innerHeight
 largura = window.innerWidth

console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo -= 1
    

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaBarata)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1500)

function posicaoRandomica(){
//remover o barata anterior (caso exista)
if (document.getElementById('barata')) {
    document.getElementById('barata').remove()
    if(vidas > 3){
        window.location.href = 'fim_de_jogo.html'
    }else{
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
    vidas++
    }
    
}

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//criar elemento html
var barata = document.createElement('img')
barata.src = 'imagens/barata.png'
barata.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
barata.style.left = posicaoX + 'px'
barata.style.top = posicaoY + 'px'
barata.style.position = 'absolute'
barata.id = 'barata'
barata.onclick = function(){
    document.getElementById('barata').remove() 
}
document.body.appendChild(barata)
console.log(tamanhoAleatorio())

/*barata.onclick = function(){
    barata.src = 'imagens/barata_morta.png'
    setTimeout(function(){
    document.getElementById('barata').remove() 
    }, 300);
    
}*/

}

function tamanhoAleatorio(){
     var classe = Math.floor(Math.random() * 3)

     if (classe === 0) {

        return 'barata1'   
     }

     else if (classe === 1){
        return 'barata2'     
     }

     else {
        return 'barata3'
     }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    if (classe === 0) {

        return 'ladoA'   
     }

     else {
        return 'ladoB'
     }
}



//Escolha da dificuldade do jogo

function iniciarJogo() {
   var nivel = document.getElementById('nivel').value

   if (nivel === '') {
        alert('Selecione um nível')
        return false
   }
   window.location.href = "jogo.html?" + nivel
}

