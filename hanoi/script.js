let pa=[],pb=[],pc=[]; 
pa.push(3);
pa.push(2);
pa.push(1);
pa.push(0);

flag =true
p1= pa
p2=pa


function colocar(entrada,saida){
    exit=[]
    if(entrada[entrada.length-1] < saida[saida.length-1]  ||  saida[saida.length-1] == undefined){
        saida.push(entrada[entrada.length-1]);
        entrada.pop();  
    }else{
        return false;
    }
    exit.push(saida[saida.length-1])
    exit.push(entrada[entrada.length-1])
    return exit

}




function atualizar(entrada,saida){
    retorno =colocar(entrada,saida);
    if(entrada== pa){
        entrada=1
    }
    else if(entrada==pb){
        entrada=2
    }
    else if(entrada==pc){
        entrada=3
    }
    if(saida==pa){
        saida=1
    }
    else if(saida==pb){
        saida=2
    }
    else if(saida==pc){
        saida=3
    }

    var disco = document.getElementById("disco"+entrada+"_"+retorno[0]);
   
    var currentClass = disco.className;
    if (currentClass == "") { 
        disco.className = "disco disco"+retorno[0];   
    } else {
        disco.className = "";  
    }

    var disco = document.getElementById("disco"+saida+"_"+retorno[0]);
    
    var currentClass = disco.className;
    if (currentClass == "") { 
        disco.className = "disco disco"+retorno[0];   
    } else {
        disco.className = "";  
    }
}

function save(entrada) {
    if(flag == true){
        p1 = entrada
        flag = false;
    }else{
        p2=entrada
        flag = true
        atualizar(p1,p2)
    }
}