document.querySelector('header').style.backgroundColor = "lightgreen";

document.querySelector('.emergency-tasks').style.backgroundColor = "salmon";

const sizeEmergency = document.querySelectorAll('.emergency-tasks h3').length;

for(let index = 0; index < sizeEmergency; index += 1){
    document.querySelectorAll('.emergency-tasks h3')[index].style.backgroundColor = "purple";
}

document.querySelector('.no-emergency-tasks').style.backgroundColor = "yellow";

const sizeNoEmergency = document.querySelectorAll('.no-emergency-tasks h3').length;

for(let index = 0; index < sizeNoEmergency; index += 1){
    document.querySelectorAll('.no-emergency-tasks h3')[index].style.backgroundColor = "black";
}

document.querySelector('footer').style.backgroundColor = "darkgreen";