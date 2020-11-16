function estAnterior(){

var a = 0,
    b = 1,
    tempAnterior = [];

    for(b = 1; b <= 2; b++){
        tempAnterior[a] = parseInt(prompt("Informe o estoque do produto "+b+" :"));
        document.write(" Produto "+b+" : "+tempAnterior[a]+" unidade(s) <br>");
        a++;
    }
    return tempAnterior;
}

function valorProd(){
    
var a = 0,
    b = 1,
    tempValores = [];
    
    for(b = 1; b <= 2; b++){
        tempValores[a] = parseFloat(prompt("Informe o valor do produto "+b+" :"));
        document.write(" Produto "+b+" : R$"+tempValores[a]+"<br>");
        a++;
    }
    return tempValores;
}

function vendasProd(){
    
var a = 0,
    b = 1,
    tempVendas = [];
    
    for(b = 1; b <= 2; b++){
        tempVendas[a] = parseInt(prompt("Quantas vendas do produto "+b+" :"));
        document.write(" Produto "+b+" : "+tempVendas[a]+" vendido(s)<br>");
        a++;
    }
    return tempVendas;
}

function relatorioProd(vendidos,valores,estoques){
    
var a = 0,
    b = 1,
    lucro = 0,
    estAtual = 0;
    
    for(b = 1; b <= 5; b++){
        
        faturamento = vendasProdutos[a] * valorProdutos[a];
        estAtual = estoqueAnterior[a] - vendasProdutos[a];
    
        document.write("Produto "+b+" : Faturamento de R$"+faturamento+" , Estoque Atual do Produto : "+estAtual+" <br>");
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    