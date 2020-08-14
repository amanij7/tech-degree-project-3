
//Global variables
//**form stuff**
const focusFirstField = document.querySelector('input[type=text]');
const jobList = document.getElementById('title');
const input = document.getElementById('other-title');


//focus on first text field using the focus method
focusFirstField.focus();


jobList.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        input.style.display = 'block';
    } else {
        input.style.display = 'none';
    }
});