function matrizVazia(l,c){
    
   var tempVazia = [];
    
    for(linha = 0; linha < linhas; linha++){
        tempVazia[linha] = [];
        for(coluna = 0; coluna < colunas; coluna++){
            tempVazia[linha][coluna] = '';
        }
    }
    return tempVazia;
}
function preencheMatriz(mv,l,c){
    
    var tempMatriz = matrizVaz;
    
    for(linha = 0; linha < linhas; linha++){
        for(coluna = 0; coluna < colunas; coluna++){
            tempMatriz[linha][coluna] = prompt("Informe um numero");
        }
    }
    return tempMatriz;
}
function encontraMaior(mp,l,c){
    
    var tempMaior = '0';
    
    for(linha = 0; linha < linhas; linha++){
        for(coluna = 0; coluna < colunas; coluna++){
            if(matrizPrincipal[linha][coluna] > tempMaior){
                tempMaior = matrizPrincipal[linha][coluna];
            }
        }
    }
    return tempMaior;
}
function multMatriz(mv,l,c,mp,me){
    
    var tempMult = matrizVaz;
    
    for(linha = 0; linha < linhas; linha++){
        for(coluna = 0; coluna < colunas; coluna++){
            tempMult[linha][coluna] = matrizPrincipal[linha][coluna] * maiorElemento;
        }
    }
    return tempMult;
}
function mostraMatriz(l,c,m){
      for(linha = 0; linha < linhas; linha++){
        for(coluna = 0; coluna < colunas; coluna++){
            if(coluna < colunas - 1){
                document.write(matrizPrincipal[linha][coluna]+" - ");
            }
            else{
                document.write(matrizPrincipal[linha][coluna]+" <br>");
            }
        }
    }
    
}










