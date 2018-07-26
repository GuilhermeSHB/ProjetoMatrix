function SomarInteiros(numero){
  var contador , soma=0;
  if(typeof numero ==='number'){
    
    for(contador=0;contador <= numero; contador++)
      soma = soma + contador;  
      
     
    return soma;
    
  }
    
  
     }

console.log(SomarInteiros(350));