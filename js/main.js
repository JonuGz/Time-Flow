$(function(){
    var Color_Superior = ["#001d59", "#1a466d", "#639ed7", "#1e7bb0", "#2287c4", "#3b132b", "#041b42", "#080b0f"];
    var Color_Central = ["#5879c8", "#cba381", "#98c0e6", "#fdfdfd", "#ffc795", "#992a1c", "#4b506c", "#1e2831"];
    var Color_Inferior = ["#595b96", "#febb02", "#dde8f3", "#64a2cf", "#ffd817", "#ff9818", "#de6753", "#3c424e"];

    var actualizarGradiente = function(Tema){
      var Gradiente_base = "-webkit-linear-gradient(to bottom, ";     
      var Gradiente = Gradiente_base + Color_Superior[Tema] + ", " + Color_Central[Tema] + ", " + Color_Inferior[Tema] + ")"
      return Gradiente
    };

    var actualizarLinear = function(Tema){
      var Linear_base = "linear-gradient(to bottom, ";     
      var Linear = Linear_base + Color_Superior[Tema] + ", " + Color_Central[Tema] + ", " + Color_Inferior[Tema] + ")"
      return Linear
    };

    var cambiarTema = function(Etapa){
      var bodyElement = document.body;
      var circulo = document.querySelector(".circulo");
      bodyElement.style.backgroundColor = Color_Superior[Etapa], 
      circulo.style.background = Color_Inferior[Etapa];
      circulo.style.background = actualizarGradiente(Etapa);
      circulo.style.background = actualizarLinear(Etapa);
    };

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
      
      if (hora < 4){
        cambiarTema(0);
      }else if (hora < 6){
        cambiarTema(1);
      }else if (hora < 12){
        cambiarTema(2);
      }else if (hora < 13){
        cambiarTema(3);
      }else if (hora < 18){
        cambiarTema(4);
      }else if (hora < 20){
        cambiarTema(5);
      }else if (hora < 22){
        cambiarTema(6);
      }else if (hora < 24){
        cambiarTema(7);
      };

    };   
    
    actualizarHora();
    var intervalo = setInterval(actualizarHora,1000);
  });