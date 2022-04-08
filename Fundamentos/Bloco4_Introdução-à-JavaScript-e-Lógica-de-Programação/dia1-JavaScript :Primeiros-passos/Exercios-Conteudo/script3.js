const nota = 80;
var estado;

if(nota >= 80){
    estado = 'aprovado';
    //console.log('Parabéns, você foi aprovada(o)!');
}else if(nota < 80 && nota >= 60){
    estado = 'lista';
    //console.log('Você está na nossa lista de espera');
}else{
    estado = 'reprovado';
    //console.log('Você foi reprovada(o)');
}

switch(estado){
    case 'aprovado':
        console.log("aprovado");
        break;
    case 'lista':
        console.log("lista");
        break;
    case 'reprovado':
        console.log("reprovado");
        break;
    default:
        console.log("não se aplica");
        break;
}