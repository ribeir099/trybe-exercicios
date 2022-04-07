let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let impar = 0;

for(let index of numbers){
    //soma += index;
    if((index % 2) > 0){
        impar += 1;
    }
}

if(impar === 0){
    console.log("nenhum valor ímpar encontrado");
}else{
    console.log(impar,"número(s) impar(es)");
}

