let pa=[],pb=[],pc=[]; 
pa.push(4);
pa.push(3);
pa.push(2);
pa.push(1);

function main(){
    console.log(pa)
    console.log(pb)
    console.log(pc)
}
function colocar(entrada,saida){
    if(entrada[entrada.length-1] < saida[saida.length-1]  ||  saida[saida.length-1] == undefined){
        saida.push(entrada[entrada.length-1]);
        entrada.pop();  
    }else{
        console.log("movimeto contra as regras")
    }
    main();
    return verificar_vitoria();
}

function verificar_vitoria(){
    if(pc.toString() == [4, 3, 2, 1] ){
        return true;
    }
    else
    {
        return false;
    }
}
