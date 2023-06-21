function determinarTipoDia(numeroDia) {
    if (numeroDia == 1 || numeroDia == 7) {
      return "Es fin de semana";
    } else {
      return "Es día de clases";
    }
  }
  
  var numeroDia = 7;
  var tipoDia = determinarTipoDia(numeroDia);
  console.log(tipoDia); 
  