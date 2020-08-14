
//Global variables
//**form stuff**
const focusFirstField = document.querySelector('input[type=text]');
const jobList = document.getElementById('title');
const otherJob = document.getElementById('other');
const input = document.getElementById('other-title');


//focus on first text field using the focus method
focusFirstField.focus();

//if else statement for the text box to appear when 'other' is selected
const showOtherInput = (e) => {
    if (e.target.value === 'other') {
        input.style.display = '';
    } else {
        input.style.display = 'none';
    }
};
