const ang1 = 30;
const ang2 = 60;
const ang3 = 90;

let soma = ang1 + ang2 + ang3;

if((soma === 180) && ang1 > 0 && ang2 > 0 && ang3 > 0){
    console.log(true);
}else{
    console.log(false);
}