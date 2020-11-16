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
function contarMaiores10(l,c,m){
    var cont = 0,
        limite = 10;
    
    for(linha = 0; linha < linhas; linha++){
        for(coluna = 0; coluna < colunas; coluna++){
            if(matrizPrincipal[linha][coluna] > limite){
                cont += 1;
            }
        }
        if(cont == 0){
            alert("Nenhum elemento maior que 10");
            break;
        }
        
    }
    document.write(cont+" elementos maiores que 10");
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
