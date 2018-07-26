function multiplicarInteiros(numero){
  var contador , multiplicador=1;
  if(typeof numero ==='number'){
    
    for(contador = 1 ; contador <= numero ; contador++){
      
      multiplicador = multiplicador * contador;
      
      
      
   }
  return multiplicador;
     }
  else {
    
    return undefined;
  }
  
  
}

console.log(multiplicarInteiros(6))
console.log(multiplicarInteiros("n"))

  
 