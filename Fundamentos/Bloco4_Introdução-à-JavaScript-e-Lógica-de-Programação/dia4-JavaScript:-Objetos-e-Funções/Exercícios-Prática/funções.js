function verificaPalindrome(string){
    let inString = '';

    for(let index = 1; index <= string.length; index += 1){
        inString += string[string.length - index];
    }
    
    if(string === inString){
        return true;
    }
    else{
        return false;
    }
}

let palindromo;

palindromo = verificaPalindrome('desenvolvimento');

console.log(palindromo);