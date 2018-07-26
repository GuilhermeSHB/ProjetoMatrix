function somarImpares(num){
  var i; var soma=0;
  if(typeof num === 'number'){
     for(i=1;i<=num;i++){
        soma = soma + i+i-1;
     }
     return soma;
  }
  else{
     return undefined;
  }

}
console.log(somarImpares(6));