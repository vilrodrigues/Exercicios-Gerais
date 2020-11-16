function preencheAlunos(a){
    
    var tempAlunos = [];
    
    for(aluno = 0; aluno < alunos; aluno++){
        tempAlunos[aluno] = prompt("Informe o nome do aluno "+(aluno+1));
    }
    return tempAlunos;
}
function matrizVazia(a,m){
    
   var tempVazia = [];
    
    for(aluno = 0; aluno < alunos; aluno++){
        tempVazia[aluno] = [];
        for(materia = 0; materia < materias; materia++){
            tempVazia[aluno][materia] = '';
        }
    }
    return tempVazia;
}
function preencheMatriz(mv,a,va,m){
    
    var tempMatriz = matrizVaz;
    
    for(aluno = 0; aluno < alunos; aluno++){
        alert("Aluno: "+vetAlunos[aluno]);
        for(materia = 0; materia < materias; materia++){
            tempMatriz[aluno][materia]= prompt("Nota de Materia "+(materia+1));
        }
    }
    return tempMatriz;
}
function mostraMatriz(a,m,va,mn){
      for(aluno = 0; aluno < alunos; aluno++){
          document.write(vetAlunos[aluno]+" : "); 
        for(materia = 0; materia < materias; materia++){
            if(materia < materias){
                document.write("Materia "+(materia+1)+" : "+matrizNotas[aluno][materia]+" | ");
            }
        }
    } 
}
function calculaMedias(a,m,mn){
    
     cont1 = 0,
        cont2 = 0,
        cont3 = 0,
        cont4 = 0,
        media1 = 0,
        media2 = 0,
        media3 = 0,
        media4 = 0;
    
    for(aluno = 0; aluno < alunos; aluno++){
        for(materia = 0; materia < materias; materia++){
            if(materia == 0){
                cont1 += parseInt(matrizNotas[aluno][0]);
            }
            if(materia == 1){
                cont2 += parseInt(matrizNotas[aluno][1]);
            }
            if(materia == 2){
                cont3 += parseInt(matrizNotas[aluno][2]);
            }
            if(materia == 3){
                cont4 += parseInt(matrizNotas[aluno][3]);
            }
        }
    }
    media1 = cont1 / 3;
    media2 = cont2 / 3;
    media3 = cont3 / 3;
    media4 = cont4 / 3;
    
    document.write("<br>Media Geral da Materia 1: "+media1);
    document.write("<br>Media Geral da Materia 2: "+media2);
    document.write("<br>Media Geral da Materia 3: "+media3);
    document.write("<br>Media Geral da Materia 4: "+media4);
}
            


















