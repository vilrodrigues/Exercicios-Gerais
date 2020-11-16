function preencheProdutos(p){
    
    var tempVet = [];
    
    for(produto = 0; produto < produtos; produto++){
        tempVet[produto] = prompt("Qual o "+(produto+1)+"o Produto?");
    }
    return tempVet;
}
function matrizVazia(p,e){
    
    var tempMatriz = [];
    
    for(produto = 0; produto < produtos; produto++){
        tempMatriz[produto] = [];
        for(estoque = 0; estoque < estoques; estoque++){
            tempMatriz[produto][estoque] = '';
        }
    }
    return tempMatriz;
}
function preencheEstoque(mv,p,e){
    
    var tempMatriz = matrizVaz;
    
    for(produto = 0; produto < produtos; produto++){
        alert("Produto: "+vetProdutos[produto]);
              for(estoque = 0; estoque < estoques; estoque++){
                    tempMatriz[produto][estoque] = prompt("QTD Estoque "+(estoque+1));
        }
    }
    return tempMatriz;
}
function mostraEstoque(p,vp,e,me){
    for(produto = 0; produto < produtos; produto++){
          document.write(vetProdutos[produto]+" : "); 
        for(estoque = 0; estoque < estoques; estoque++){
            if(estoque < estoques){
                document.write("QTD Estoque "+(estoque+1)+" : "+matrizEstoques[produto][estoque]+" | ");
            }
        }
        document.write("<br>");
    } 
}
function contaEstoques(p,e,me,vp){
    
    var p1 = 0,
        p2 = 0,
        p3 = 0;
    
    for(produto = 0; produto < produtos; produto++){
        for(estoque = 0; estoque < estoques; estoque++){
            if(matrizEstoques[produto] == 0){
                p1 += matrizEstoques[produto][estoque];
            }
            if(matrizEstoques[produto] == 1){
                p2 += matrizEstoques[produto][estoque];
               }
        }
    }
    document.write("<br>Ao todo "+p1+" unidades do produto: "+vetProdutos[0]);
    document.write("<br>Ao todo "+p2+" unidades do produto: "+vetProdutos[1]);
}
                   
    
            
            
                    
            