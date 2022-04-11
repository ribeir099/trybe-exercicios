// function verificaPalindrome(string){
//     let inString = '';

//     for(let index = 1; index <= string.length; index += 1){
//         inString += string[string.length - index];
//     }
    
//     if(string === inString){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let palindromo;

// palindromo = verificaPalindrome('desenvolvimento');

// console.log(palindromo);

function maior(array){
    let maior = -1;
    let indice;

    for(let index = 0; index < array.length; index += 1){
        if(array[index] > maior){
            maior = array[index];
            indice = index;
        }
    }

    return indice;
}

let num = [2, 3, 6, 7, 10, 1];
let indice;

indice = maior(num);

console.log(indice);