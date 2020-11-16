function ParImpar(num) {
    if (num % 2 == 0) {
    alert("Par");
    } 
    else {
    alert("Impar");
    }
}

function par() {
    if (i % 2 == 0) {
    document.write(i + " é par <br> ");
    }
}

function impar() {
    if (i % 2 != 0) {
    document.write(i + " é impar <br> ");
    }
}

function calcularImc(altura,peso){
    imc = peso / (altura * altura);
    
    if (imc < 18.5){
        alert("Voce esta abaixo do peso");
        
    }
    else if ((imc >= 18.5) && (imc <= 35)){
        alert("Voce esta no peso ideal");
        
    }
    else {
        alert("Voce esta acima do peso");
        
    }
}

function calculaDiasDeVida(ano,mes,dia){
    diasVividos = (ano * 365) + (mes * 30) + dia;
    
    alert("Voce viveu "+diasVividos+" dias. ");
}

function calculaBatimentos(diasVividos){
    batimentos = diasVividos * ((24 * 60) * 80);
    
    alert("Seu coracao ja bateu "+batimentos+" vezes ");
}

function calculaCopas(ano){
    if (i % 4 == 2){
        document.write("Copa de "+i+"<br>");
    }
}
    
function calculaPontos(time){    
    vitoria = Number(prompt("Time "+time+" \n Informe quantas vitorias: "));
    empate  = Number(prompt("Time "+time+" \n Informe quantos empates: "));
    derrota = Number(prompt("Time "+time+" \n Informe quantas derrotas: "));

    pontos = (((vitoria * 3) + empate) - derrota);
    
    document.write("Time "+time+" : "+pontos+" pontos <br>");
}
    
function verificaCpf(){
    
for(i = 10; i >= 2; i--){
    digitos9 = Number(prompt("Informe o "+contador+"º digito do seu CPF: "));
    
somador += digitos9 * i;
contador++;
    
}
    
primeiroVerificador = (somador * 10) % 11;
somador = 0;
contador = 1;
  
if ((primeiroVerificador == 10) ||              (primeiroVerificador == 11)){
    
    primeiroVerificador = 0;
    
    if (primeiroVerificador != verificadorUm){
    alert("Invalido");
    }     
}
    
for(y = 11; y >= 2; y--){
    digitos10 = Number(prompt("Informe o "+contador+"º digito do seu CPF: "));
    
    somador += digitos10 * y;
    contador++;
    
}

segundoVerificador = (somador * 10) % 11;

    if ((segundoVerificador == 10) || (segundoVerificador == 11)){
    segundoVerificador = 0;
    }
    if (segundoVerificador != verificadorDois){
    alert("Invalido");
    }
    if (segundoVerificador == verificadorDois){
    alert("CPF Válido");
    }

}
    