const currentHour = 6;
let menssage = '';

if(currentHour >= 22){
    menssage = 'Não deveríamos comer nada, é hora de dormir';
}else if(currentHour >= 18 && currentHour < 22){
    menssage = 'Rango da noite, vamos jantar :D';
}else if(currentHour >= 14 && currentHour < 18){
    menssage = 'Vamos fazer um bolo pro café da tarde?';
}else if(currentHour >= 11 && currentHour < 14){
    menssage = 'Hora do almoço!!!';
}else{
    menssage = 'Hmmm, cheiro de café recém passado" na variável';
}
 
console.log(menssage);

let weekDay = 'jennifer';

if(weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}else{
    console.log("FINALMENTE, descanso merecido UwU");
}