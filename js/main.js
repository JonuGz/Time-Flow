$(function(){
    var actualizarHora = function(){
      var fecha = new Date(),
          hora = fecha.getHours(),
          minutos = fecha.getMinutes();
      
      var $pHoras = $("#horas"),
          $pMinutos = $("#minutos");

      if(hora>=24){
        hora = hora - 24;
      }
      if(hora<10){$pHoras.text("0"+hora)}else{$pHoras.text(hora)};
      if(minutos<10){$pMinutos.text("0"+minutos)}else{$pMinutos.text(minutos)};     
    };   
    
    actualizarHora();
    var intervalo = setInterval(actualizarHora,1000);
  });