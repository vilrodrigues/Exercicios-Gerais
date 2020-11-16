function fillArray(qtd) {
   
    var tempArray = [],
        i = 0,
        q = 1;
    
    for (q = 1; q <= qt; q++){
        tempArray[i] = parseInt(prompt("Item "+q+": "));
        i++;
    }
    return tempArray;
}

function somaArray(qtd) {
    
    var tempSoma = [],
        a = 0,
        b = 1;
    
    for (b = 1; b <= qt; b++){
        tempSoma[a] = ar1[a] + ar2[a];
        a++;
    }
    return tempSoma;
}