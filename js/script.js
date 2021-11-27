
document.getElementById('button1').addEventListener("click", Cal);

document.getElementById('button2').addEventListener("click", EraseCal);

       
        
        
function Cal(){
            var n1 = document.getElementById("nota1").value;
            var n2 = document.getElementById("nota2").value;
            var n3 = document.getElementById("nota3").value;
            var curso = document.getElementById("fname").value;
            var disciplina = document.getElementById("campi").value;

            

            var n1 = parseFloat(n1);
            var n2 = parseFloat(n2);
            var n3 = parseFloat(n3);
           
            var mediaP = (n1 + n2 + n3) / 3;

            mediaP = mediaP.toFixed(1);
            
            mediaP = parseFloat(mediaP);

            document.getElementById("media-here").innerHTML = "Sua média em " + disciplina + " é de " + mediaP + ".";
            

            if (n1 > 10 || n2 > 10 || n3 > 10){
                document.getElementById("media-here").innerHTML = "" ;
                document.getElementById("nota-final").innerHTML = "Somentes notas menores que 10,0."
            } 

            if (mediaP >= 7 && !(n1 > 10) && !(n2 > 10) && !(n3 > 10)){
                document.getElementById("media-here").innerHTML = "Parabéns!, você está aprovado em " + disciplina + "!";
                document.getElementById("nota-final").innerHTML = "";
            } else if (mediaP < 3){
                document.getElementById("media-here").innerHTML = "Infelizmente sua média em " + disciplina + " é de apenas " + mediaP + " pontos, reprovou automaticamente.";
                document.getElementById("nota-final").innerHTML = "";
            }

           


            switch(mediaP){
                
                /*Nota 3 pra cima*/

                case 3.0:
                    document.getElementById('nota-final').innerHTML = "Você precisa tirar 9.7 pontos na final.";
                    break;
                case 3.1:
                    document.getElementById('nota-final').innerHTML = "Você precisa tirar 9.5 pontos na final.";
                    break;
                case 3.2:
                    document.getElementById('nota-final').innerHTML = "Você precisa tirar 9.2 pontos na final.";
                    break;
                case 3.3:
                    document.getElementById('nota-final').innerHTML = "Você precisa tirar 9.0 pontos na final.";
                    break;
                case 3.4:
                    document.getElementById('nota-final').innerHTML = "Você precisa tirar 8.8 pontos na final.";
                    break;
                case 3.5:
                    document.getElementById('nota-final').innerHTML = "Você precisa tirar 8.5 pontos na final.";
                    break;
                case 3.6:
                    document.getElementById('nota-final').innerHTML = "Você precisa tirar 8.3 pontos na final.";
                    break;
                case 3.7:
                    document.getElementById('nota-final').innerHTML = "Você precisa tirar 8.1 pontos na final.";
                    break;
                case 3.8:
                    document.getElementById('nota-final').innerHTML = "Você precisa tirar 7.8 pontos na final.";
                    break;
                case 3.9:
                    document.getElementById('nota-final').innerHTML = "Você precisa tirar 7.6 pontos na final.";
                    break;

                /*Nota 4 pra cima*/

                case 4.0:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 7.4 pontos na final.";
                    break;
                case 4.1:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 7.1 pontos na final.";
                    break;
                case 4.2:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 6.9 pontos na final.";
                    break;
                case 4.3:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 6.7 pontos na final.";
                    break;
                case 4.4:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 6.4 pontos na final.";
                    break;
                case 4.5:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 6.2 pontos na final.";
                    break;
                case 4.6:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 6.0 pontos na final.";
                    break;
                case 4.7:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 5.7 pontos na final.";
                    break;
                case 4.8:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 5.5 pontos na final.";
                    break;
                case 4.9:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 5.3 pontos na final.";
                    break;            
                
                /*Nota 5 pra cima*/

                case 5.0:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 5.0 pontos na final.";
                    break;
                case 5.1:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 4.8 pontos na final.";
                    break;
                case 5.2:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 4.6 pontos na final.";
                    break;
                case 5.3:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 4.3 pontos na final.";
                    break;
                case 5.4:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 4.1 pontos na final.";
                    break;
                case 5.5:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 3.9 pontos na final.";
                    break;
                case 5.6:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 3.6 pontos na final.";
                    break;
                case 5.7:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 3.4 pontos na final.";
                    break;
                case 5.8:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 3.2 pontos na final.";
                    break;
                case 5.9:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 2.9 pontos na final.";
                    break;            

                /*Nota 6 pra cima*/    

                case 6.0:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 2.7 pontos na final.";
                    break;
                case 6.1:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 2.5 pontos na final.";
                    break;
                case 6.2:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 2.2 pontos na final.";
                    break;
                case 6.3:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 2.0 pontos na final.";
                    break;
                case 6.4:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 1.8 pontos na final.";
                    break;
                case 6.5:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 1.5 pontos na final.";
                    break;
                case 6.6:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 1.3 pontos na final.";
                    break;
                case 6.7:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 1.1 pontos na final.";
                    break;
                case 6.8:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 0.8 pontos na final.";
                    break;
                case 6.9:
                    document.getElementById("nota-final").innerHTML = "Você precisa tirar 0.6 pontos na final.";
                    break;

                case "":
                document.getElementById('media-here').innerHTML = "";;
            }

            document.getElementById("nome-curso").innerHTML = curso;
};
        
function EraseCal(){
            document.getElementById('media-here').innerHTML = "";
            document.getElementById('nota-final').innerHTML = "";
            document.getElementById('fname').innerHTML = "";
            document.getElementById('campi').innerHTML = "";
};


document.getElementById('change-mode').addEventListener('click', toggleMode);

function toggleMode(){
    var h = document.getElementById('container-all');
    h.classList.toggle('dark-body');

    var h = document.getElementById('header-container');
    h.classList.toggle('dark-header');

    var h = document.getElementById('footer-container');
    h.classList.toggle('dark-header');

    var h = document.getElementById('text-container');
    h.classList.toggle('dark-color');

    var h = document.getElementById('label1');
    h.classList.toggle('dark-color');
    
    var h = document.getElementById('label2');
    h.classList.toggle('dark-color');

    var h = document.getElementById('nota1-label');
    h.classList.toggle('dark-color');

    var h = document.getElementById('label4');
    h.classList.toggle('dark-color');

    var h = document.getElementById('label5');
    h.classList.toggle('dark-color');

    var h = document.getElementById('fname');
    h.classList.toggle('dark-color-inside');

    var h = document.getElementById('campi');
    h.classList.toggle('dark-color-inside');

    var h = document.getElementById('nota1');
    h.classList.toggle('dark-color-inside');

    var h = document.getElementById('nota2');
    h.classList.toggle('dark-color-inside');

    var h = document.getElementById('nota3');
    h.classList.toggle('dark-color-inside');

    var h = document.getElementById('modal-here');
    h.classList.toggle('dark-color-modal');

    var h = document.getElementById('media-here');
    h.classList.toggle('dark-color-modal-title');

    var h = document.getElementById('nota-final');
    h.classList.toggle('dark-color-modal-title');

    var h = document.getElementById('modal-rodape');
    h.classList.toggle('dark-color-modal');

    var h = document.getElementById('button2');
    h.classList.toggle('bg-transparent');

    var h = document.getElementById('button2');
    h.classList.toggle('text-white');

    var h = document.getElementById('button2');
    h.classList.toggle('border-white');

    var h = document.getElementById('close-button');
    h.classList.toggle('bg-transparent');

    var h = document.getElementById('close-button');
    h.classList.toggle('text-white');

    var h = document.getElementById('close-button');
    h.classList.toggle('border-white');

    var h = document.getElementById('moon-change');
    h.classList.toggle('moon-clicked');

    var h = document.getElementById('sun-change');
    h.classList.toggle('sun-clicked');

    

    


    




    

   

    
}





            

