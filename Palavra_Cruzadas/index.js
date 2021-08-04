const conteudo = document.getElementById("conteudo")

function VoidSearch() {
    let items = [];
    let array = ["macaco", "leao", "cervo", "tigre", "urso", "elefante", "girafa", "zebra", "guaxinim", "gaviao", "aguia", "cobra", "borboleta", "jacare", "crocodilo", "tartaruga", "peixe", "boi", "vaca", "galinha"];
    for (i = 0; i < 3; i++) {
        x = Math.floor(Math.random() * array.length)
        items.push(array[x]);
        let palavras = document.createElement('p')
        palavras.innerText = (items[i])
        conteudo.appendChild(palavras)
        array.splice(x,1);
    }
    return items;
}

function createMatriz() {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "y", "u", "v", "w", "x", "y"]
    let linha = [];
    let matriz = [];
    const space = document.createElement("br")
    conteudo.appendChild(space)

    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            linha.push(letters[Math.floor(Math.random() * letters.length)]);
        }
        matriz.push(linha);
        linha = [];
    }
    items = VoidSearch();
    for (p = 0; p < 3; p++) {
        min = Math.ceil(items[p].length-1);
        max = Math.floor(9);    
        j = Math.floor(Math.random() * 9)
        for (i = Math.floor(Math.random() * (max - min)) + min, k = 0; items[p].length - k - 1 >= 0; i--, k++) {
            matriz[j][i] = items[p][items[p].length - k - 1];
        }
    }

    for(i = 0; i <9;i++){
        let linha = document.createElement('div')
       
        for(j=0; j <9;j++){
            let letras = document.createElement('span')
           
            letras.innerText = (matriz[i][j])
            linha.appendChild(letras)
        }
        conteudo.appendChild(linha)
    }
    return matriz;
}
createMatriz();