const inputSection = document.querySelector('[data-input-section]');
const submitButton = document.querySelector('[data-submit-button]');
const error = document.querySelector('[data-error]');

atpos = inputSection.value.indexOf("@");
dotpos = inputSection.value.lastIndexOf(".");

submitButton.addEventListener('click', () =>{
    if(atpos < 1 || (dotpos - atpos < 2)){
        error.style.display = 'Block';
    }
})
