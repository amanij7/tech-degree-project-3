//**FORM - FIRST FIELD FOCUS**
const focusFirstField = document.querySelector('input[type=text]');
const jobList = document.getElementById('title');
const input = document.getElementById('other-title');


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

//**SHIRT DESIGN**   student github: hjairo
const shirtColor = document.getElementById('color');
const shirtColorDiv = document.getElementById('colors-js-puns');
const shirtDesign = document.getElementById('design');
const option = shirtColor.options;
const firstIndex = shirtDesign[0];
//booleans 
shirtColor.hidden = true;
firstIndex.selected = true;
firstIndex.hidden = true;
//shirt design event listner
    shirtDesign.addEventListener('change', () => {
        shirtColor.hidden = false;//no longer hides once design is selected
        //loops through the color options and selects the specified indexes based on the design chosen
        for (i = 0; i < shirtColor.length; i++ ) {
            //if js puns is selected, unhide option indexes 0-2
            if (shirtDesign.value === 'js puns') {
              if (i < 3) {
                option[0].selected = true;
                option[i].hidden = false;
            } else {
                option[i].hidden = true;
            }
        }
        //if heart js is selected, unhide option indexes 2 and up
            if (shirtDesign.value === 'heart js') {
              if (i >= 3) {
                option[3].selected = true;
                option[i].hidden = false;
            } else {
                option[i].hidden = true
            } 
           }
        };
    });

    //***ACTIVITY SECTION***
    const activityInput = document.querySelectorAll('.activities input');
    const activityMain = document.querySelector('.activities');
    let total = 0; //the initial cost if attending 0 activities
    const totalText = document.createElement('h3');
    totalText.innerHTML = 'Total: 0';
    activityMain.appendChild(totalText);
    
    //I'm using the things I learned from the checkbox practice for this code

    document.querySelector('.activities').addEventListener('change', (e) => {
        let clicked = e.target;
        //this targets ONLY the attribute that has been clicked
        let timeSelected = clicked.getAttribute('data-day-and-time');
        let price = parseInt(clicked.getAttribute('data-cost'));

        for (let i = 0; i < activityInput.length; i++) {
            //This variable targets ALL of the attributes in the loop
            const time = activityInput[i].getAttribute('data-day-and-time'); 
            if (clicked.checked) {
            //Here I'm comparing the attribute that has been clicked to all the attributes that have been looped over
            //If the attribute results are equal, the equevalent day/time that has NOT been checked will be disabled
            if (timeSelected  === time && clicked !== activityInput[i]) {     
            activityInput[i].disabled = true;
          } else {
            activityInput[i].disabled = false;
          }
            }
        }
        if (clicked.checked) {
            total = total + price; 
        } else {
            total = total - price;
        }
        totalText.textContent = `Total: $${total}`;

    });

    //***PAYMENT SECTION*** 

    const payment = document.querySelector('#payment');
    const creditCard = document.querySelector('#credit-card');
    const selectPay = payment.value = 'select method';
    const card = payment.value = 'credit card';
    const payPal = document.querySelector('#paypal');
    const bitCoin = document.querySelector('#bitcoin');
    //Card is selected by default and other payment methods are hidden
    selectPay.hidden = true;
    card.selected = true;
    payPal.hidden = true;
    bitCoin.hidden = true;

    
    //Getting the value and using if/else to hide the information from the payment types that are NOT selected
    payment.addEventListener('change', (e) => {
        const type = e.target.value; 
        if (type === 'credit card') {
            creditCard.style.display = 'block';
            payPal.style.display = 'none';
            bitCoin.style.display = 'none';
        } else if (type === 'paypal') {
            creditCard.style.display = 'none';
            payPal.style.display = 'block';
            bitCoin.style.display = 'none';
        } else {
            creditCard.style.display = 'none';
            payPal.style.display = 'none';
            bitCoin.style.display = 'block';
        }
});

//***VALIDATION***
const name = document.getElementById('name');
const nameLabel = document.querySelector('label[for="name"]');
const nameError = document.createElement('h4');
nameError.innerHTML = 'Please enter your name';
nameError.style.color = 'red';
nameError.hidden = true;
nameLabel.appendChild(nameError);

const nameValidation = () => {
    if (name.length === 0) {
        nameError.hidden = false;
    } else {
        nameError.hidden = true;
    }
}

name.addEventListener('keyup', nameValidation);


