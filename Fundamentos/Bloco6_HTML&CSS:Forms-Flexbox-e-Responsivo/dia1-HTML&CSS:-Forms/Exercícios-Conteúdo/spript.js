// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function clickBotao(event) {
    event.preventDefault();
}

HREF_LINK.addEventListener('click', clickBotao);

function clickCheckbox(event) {
    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', clickCheckbox);

function clickCheckbox(event) {
    if (event.key !== 'a') {
        event.preventDefault();
    }
    
}

INPUT_TEXT.addEventListener('keypress', clickCheckbox);
