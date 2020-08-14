
//Global variables
//**form stuff**
const focusFirstField = document.querySelector('input[type=text]');
const jobList = document.getElementById('title');
const input = document.getElementById('other-title');

//**Shirt stuff**
const shirtSizes = document.getElementById('size');
const shirtDesign = document.getElementById('design');
const colorLabel = document.getElementById('color');
const colorOptions = document.getElementsByTagName('option[0]');


//focus on first text field using the focus method
focusFirstField.focus();
//hide input
input.style.display = 'none';
//show input
jobList.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        input.style.display = 'block';
    } else {
        input.style.display = 'none';
    }
});

//change color selection
colorOptions.textContent = 'Please select a T-shirt theme';
shirtDesign.addEventListener('change', (e) => {
    //initial state
    colorOptions.textContent = 'Please select a T-shirt theme';
    //change color options based on the type of shirt
    if (e.target.value === 'js puns') {

    } else if (e.target.value === 'heart js') {
        
    }

    
});