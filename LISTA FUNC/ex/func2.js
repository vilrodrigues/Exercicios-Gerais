function parImpar(num){
    if (num % 2 == 0){
        document.write(num+" é Par <br>");
    }
    else {
        document.write(num+" é Impar <br>");
    }
    return;
}
function totalPares(num){
    if (num % 2 == 0){
        somador += 1;
        
    }
}
 function totalImpares(num){
    if (num % 2 != 0){
        somador2 += 1;
    }
}
function somaTodos(num){
    soma += num;
    return soma;
}
function mediaTodos(soma){

    media = soma / (i - 1);
    return media;
}
function maiorN(num){
    if (i == 1){
        maior = num;
    }
    if (num > maior){
        maior = num;
    }
}
function menorN(num){
    if (i == 1){
        menor = num;
    }    
    if (num <= menor){
        menor = num;
        }
} 
