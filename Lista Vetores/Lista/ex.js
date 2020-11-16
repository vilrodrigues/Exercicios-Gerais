function receberProdutos(qtdItens){
    
for (i = 1; i <= qtdItens; i++){
    produtos[i] = prompt("Informe o "+i+"º produto: ");
    }
}

function exibirProdutos(qtdItens){
/* podemos utilizar indices iguais nas funções pois */ 
for (i = 1; i <= qtdItens; i++){
    document.write("Produto "+i+": "+produtos[i]+"<br>");
    }
}

function recebeItens(qtd){
var vetor = [];
    
for (i = 1; i <= qtd; i++){
    a1[i] = prompt("Vetor 1 \n Informe o valor "+i);
    document.write("Vetor 1, item "+i+": "+a1[i]+"<br>");
    }
    return vetor;
}

function somaVetores(a1,a2){
    for (i = 1; i <= qtd; i++){
        aSoma[i] = a1[i] + a2[i];
        
        document.write(aSoma[i]);
    }
    
}

function exibeSoma(){
    for (y = 1; y <= qtd; y++){
        document.write(aSoma[y]+"<br>")
    }
}