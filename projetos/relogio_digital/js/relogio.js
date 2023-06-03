function exibirHora(){
    function adicionaZero(i) {
        if (i < 10) {i = "0" + i}
         return i;
         }
    const h = new Date();
    let horas = adicionaZero(h.getHours());
    let horasTrocaFundo = document.getElementById("hora").innerHTML = horas;
        
    const m = new Date();
    let minutos = adicionaZero(m.getMinutes());
    let minutosTrocaFundo = document.getElementById("minutos").innerHTML = minutos;

    const s = new Date();
    let segundos = adicionaZero(s.getSeconds());
    let segundosTrocaFundo = document.getElementById("segundos").innerHTML = segundos;
    console.log(segundosTrocaFundo)
        if (horasTrocaFundo >= '00' && horasTrocaFundo <= 11) {
          document.getElementById("trocandoFundo").className = 'fundoTrocaDia' 
          
        } else if(horasTrocaFundo >= 12 && horasTrocaFundo <= 17){
            document.getElementById("trocandoFundo").className = 'fundoTrocaTarde' 

        } else if(horasTrocaFundo >= 18 && horasTrocaFundo <= 23){
            document.getElementById("trocandoFundo").className = 'fundoTrocaNoite' 
        }
    }
    setInterval(exibirHora, 1000);
