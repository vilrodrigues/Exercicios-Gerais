function preencheVetor(){
    
var a = 0,
    b = 1,
    tempVetor = [];
    
    for(b = 1; b <= 5; b++){
        tempVetor[a] = parseInt(prompt("Informe o valor do item "+b+" :"));
        a++;
    }
    return tempVetor;
}

function acharMaiores(vetor){
    
var a = 0,
    b = 1;

    for(b = 1; b <= 5; b++){
        if (vetorPrincipal[a] > 50){
            document.write(vetorPrincipal[a]+" posição do termo no array : "+a+"<br>");
            a++;
        }
        else {
        a++;
        }
    } 
    if ((vetorPrincipal[0] < 50) &&
        (vetorPrincipal[1] < 50) &&
        (vetorPrincipal[2] < 50) &&
        (vetorPrincipal[3] < 50) &&
        (vetorPrincipal[4] < 50) &&
        (vetorPrincipal[5] < 50)){
        
        alert("Nenhuma Ocorrencia");
        }
}

/*function ocorrencia(){
    if ((vetorPrincipal[0] < 50) &&
        (vetorPrincipal[1] < 50) &&
        (vetorPrincipal[2] < 50) &&
        (vetorPrincipal[3] < 50) &&
        (vetorPrincipal[4] < 50) &&
        (vetorPrincipal[5] < 50)){
        
        alert("Nenhuma Ocorrencia");
        }
    else {
        document.write("");
    }
}
            