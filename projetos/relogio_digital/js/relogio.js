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



    const d = new Date();
    document.getElementById("data").innerHTML = ( d.getDate() + ` / `);

    const m = new Date();
     document.getElementById("mes").innerHTML = ((m.getMonth() + 1  + ` / `));

    const a = new Date();
   document.getElementById("ano").innerHTML = (a.getFullYear() + ` - `);
                                    
    const ds = new Date();
 let diaDaSemana = document.getElementById("dia").innerHTML = ds.getDay();

                                    if (diaDaSemana === 0) {
                                        diaDaSemana = document.getElementById("dia").innerHTML = `Domingo / Sunday `       
                                    } else if(diaDaSemana === 1){
                                        diaDaSemana = document.getElementById("dia").innerHTML = `Segunda-Feira / Monday ` 
                                    } else if(diaDaSemana === 2){
                                        diaDaSemana = document.getElementById("dia").innerHTML = `Terça-Feira / Tuesday ` 
                                    } else if(diaDaSemana === 3){
                                        diaDaSemana = document.getElementById("dia").innerHTML = `Quarta-Feira / Wednesday ` 
                                    } else if(diaDaSemana === 4){
                                        diaDaSemana = document.getElementById("dia").innerHTML = `Quinta-Feira / Thursday ` 
                                    } else if(diaDaSemana === 5){
                                        diaDaSemana = document.getElementById("dia").innerHTML = `Sexta-Feira / Friday ` 
                                    } else if(diaDaSemana === 6){
                                        diaDaSemana = document.getElementById("dia").innerHTML = `Sábado / Saturday ` 
                                    }



                                    window.addEventListener("load", function() {
                                        const loader = document.getElementById("loader");
                                        
                                        setTimeout(function() {
                                        loader.style.display = "none"; // oculta o loader após o atraso
                                        }, 1050); // define o tempo de atraso em milissegundos (neste caso, 3 segundos)
                                    });
                                    