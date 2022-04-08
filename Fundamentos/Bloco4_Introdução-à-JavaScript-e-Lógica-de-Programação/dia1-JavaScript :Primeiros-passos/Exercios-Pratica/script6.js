var peca = 'GATO';
var string;

string = peca.toLocaleLowerCase();

switch(string){
    case 'rei':
        console.log("A peça",peca,"pode mover-se em todas as direções (horizontal, vertical e diagonal).");
        break;
    case 'rainha':
        console.log("A peça",peca,"pode mover-se ao longo da horizontal, vertical e diagonais.");
        break;
    case 'bispo':
        console.log("A peça",peca,"pode mover-se ao longo da diagonal.");
        break;
    case 'cavalo':
        console.log("A peça",peca,"pode mover-se em forma de “L”.");
        break;
    case 'torre':
        console.log("A peça",peca,"pode mover-se pela vertical ou horizontal.");
        break;
    case 'peão':
        console.log("A peça",peca,"pode mover-se apenas uma casa para frente e somente captura outras peças na diagonal.");
        break;
    default:
        console.log("Peça inválida.");
        break;
}
