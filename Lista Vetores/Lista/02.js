function recebeModelos(){
var a = 0,
    b = 1,
    tempModelos = [];
    
    for(b = 1; b <= 2; b++){
        tempModelos[a] = prompt("Informe qual o modelo "+b+" : ");
        document.write("Modelo "+b+" : "+tempModelos[a]+"<br>");
        a++;
    }
    return tempModelos;
}

function recebeConsumos(){
var a = 0,
    b = 1,
    tempConsumos = [];
    
maisEco = 0;
modeloEco = "modelo";
    
    for(b = 1; b <= 2; b++){
        tempConsumos[a] = parseInt(prompt("Informe qual o consumo \n (Km/L) do modelo "+b+" : "));
        document.write(carrosModelos[a]+" : "+tempConsumos[a]+" Km/L<br>");
        
        ;
    }
    return tempConsumos;
}

function mostraConsumo(){
var a = 0,
    b = 1,
    tempCons = [];
    
    for(b = 1; b <= 2; b++){
        tempCons[a] = 1000 / carrosConsumos[a];
        
        document.write(carrosModelos[a]+" : "+tempCons[a].toFixed(1)+" L para 1000Km<br>");
        a++;
    }
    return tempCons;
}  

function MaisEconomico(){

var a = 0,
    control = 1;
maisEco = 0;
modeloEco = "modelo";
    
maisEco = carrosConsumos[0];
modeloEco= carrosModelos[0];
        
        while (control = 1){
            maisEco = carrosConsumos[a];
            modeloEco = carrosModelos[a];
            a++;
                if (carrosConsumos[a] < maisEco){
                    maisEco = carrosConsumos[a];
                    modeloEco = carrosModelos[a];
                    a++;
                }
                   
        } 
}









