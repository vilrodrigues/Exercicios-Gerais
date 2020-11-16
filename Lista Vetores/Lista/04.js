function preenche(){

var tempVet = [8],
    i = 0;
    
    for(i = 0; i < 8; i++){
    
    tempVet[i] = Number(prompt("Digite o termo "+i+" do vetor"));
    }
    return tempVet;
}

function organiza(vetor,vetor1,vetor2){

i = 0,
x = 0,
y = 0; 
    
    for(i = 0; i < 8; i++){
        
        if(vet[i]<0){
        
        vet2[y] = vet[i];
        y++;
        }

        else {

        vet1[x] = vet[i];
        x++;
        }
    }
}

function mostraPos(qt,vetor1){

var i = 0;
    
    for(i = 0;i < x; i++){

    document.write(vet1[i]+"<br>");
    }
}

function mostraNeg(qt,vetor2){
    
var i = 0;
    
    for(i = 0;i < y; i++){

    document.write(vet2[i]+"<br>");
    }
}







