function CalcularIMC(altura, peso) 
      {
       
        altura = Math.round(altura) / 100;
        peso = Math.round(peso);
        
        var indice = (peso / Math.pow(altura, 2));
        var resultado = " ";
       
         {
            if (indice < 20)
            {
              resultado = "Peso inferior al normal.";
            }
            else if (indice >= 20 && indice < 24)
            {
              resultado = "Peso Normal";
            }
            else if (indice >= 24 && indice < 29)
            {
              resultado = "Peso superior al normal";
            }
            else
            {
              resultado = "Obesidad";
            }  
         
        }

        return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
      }
 
      function MostrarResultadoIMC ( altura, peso, indice)
      {
        var mensaje = "Usted mide " + altura / 100 + " metros y pesa " + peso + " Kg. \n \n " + indice;
        alert (mensaje);
      }	
 
     
      var altura = prompt("Indique su altura en centímetros:", "");
      var peso =prompt("Indique su peso en kilógramos:", "");
 
     
      var resultado = CalcularIMC(altura, peso);
      MostrarResultadoIMC( altura, peso, resultado);