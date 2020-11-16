function preencheAlunos(a){
    
    var tempAlunos = [];
    
    for(aluno = 0; aluno < alunos; aluno++){
        tempAlunos[aluno] = prompt("Nome do aluno "+(aluno+1));
    }
    return tempAlunos;
}
function matrizVazia(a,p){
    
    var tempVazia = []
    
    for(aluno = 0; aluno < alunos; aluno++){
        tempVazia[aluno] = [];
        for(prova = 0; prova < provas; prova++){
            tempVazia[aluno][prova] = '';
        }
    }
    return tempVazia;
}
function preencheNotas(mv,a,p,va){
    
    var tempNotas = matrizVaz;
    
    for(aluno = 0; aluno < alunos; aluno++){
        alert("Aluno: "+vetAlunos[aluno]);
              for(prova = 0; prova < provas; prova++){
            tempNotas[aluno][prova] = prompt("Nota da Prova "+(prova+1)+" : ");
        }
    }
    return tempNotas;
}
function mostrarNotas(a,p,va,mn){
      for(aluno = 0; aluno < alunos; aluno++){
          document.write(vetAlunos[aluno]+" : "); 
        for(prova = 0; prova < provas; prova++){
            if(prova < provas){
                document.write("Prova "+(prova+1)+" : "+matrizNotas[aluno][prova]+" | ");
            }
        }
        document.write("<br>");
    } 
}
function menorNota(a,p,mn){
    
    var tempMenor = 110,
        tempProva = 0;
    
    for(aluno = 0; aluno < alunos; aluno++){
        document.write("<br>Menor Nota Aluno "+(aluno+1)+" : "); 
        for(prova = 0; prova < provas; prova++){
            if (matrizNotas[aluno][prova] < tempMenor){
                tempMenor = matrizNotas[aluno][prova];
                tempProva = prova + 1;
            }
        }
        document.write("Prova "+tempProva+" Nota "+tempMenor);
    }
}
                
        






























            