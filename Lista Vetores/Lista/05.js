function preencheVet(){
   
    var tempArray = [],
        i = 0,
        q = 1;
    
    for(q = 1; q <= 3; q++){
        tempArray[i] = parseInt(prompt("Item "+q+": "));
        i++;
    }
    return tempArray;
}
function somaVet(v1,v2){
    
    var tempSoma = [],
        a = 0,
        b = 1;
    
    for(b = 1; b <= 3; b++){
        tempSoma[a] = vet1[a] + vet2[a];
        a++;
    }
    return tempSoma;
}
function ProdutoVet(v1,v2){
    
    var tempProduto = [],
        a = 0,
        b = 1;
    
    for(b = 1; b <= 3; b++){
        tempProduto[a] = vet1[a] * vet2[a];
        a++;
    }
    return tempProduto;
}
function uniVet(v1,v2){
    
    uniao = [];
    contu = 0;
    
    for(i = 0; i < 3; i++){
        j = 0;
        while((j < contu) && (vet1[i] != uniao[j])){
            j += 1;
        }
        if(j >= contu){
            uniao[contu] = vet1[i];
            contu += 1;
        }
    }
    for(i = 0; i < 3; i++){
        j = 0;
        while((j < contu) && (vet2[i] != uniao[j])){
            j += 1;
        }
        if(j >= contu){
            uniao[contu] = vet2[i];
            contu += 1;
        }
    }
    return uniao;
}
function difVet(v1,v2){
    contd = 0;
    dif = [];
    
    for(i = 0; i < 3; i++){
        j = 0;
        while((vet1[i] != vet2[j]) && (j <= 3)){
            j += 1;
        }
        if( j > 3){
            k = 1;
            while((k < contd) && (vet1[i] != dif[k])){
                k += 1;
            }
            if(k >= contd){
                dif[contd] = vet1[i];
                contd += 1;
            }
        }
    }
    return dif;
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    