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
//NAME
const name = document.getElementById('name');
const nameLabel = document.querySelector('label[for="name"]');
const nameError = document.createElement('h4');
//style and append error message
name.placeholder = 'John Smith';
nameError.innerHTML = 'Please enter your name';
nameError.style.color = 'red';
nameError.hidden = true;
nameLabel.appendChild(nameError);
//This function and conditional checks if the or not a name is entered and hides the message based on the returnes true or false values
const nameValidation = () => {
    //if a value is entered and deleted, an error message will appear
    if (!name.value) {
        nameError.hidden = false;
        return false;
    } else {
        nameError.hidden = true;
        return true;
    }
}
//The event listener is listening for the keyup event on the nameValidation variable
name.addEventListener('keyup', nameValidation);


//EMAIL
const email = document.getElementById('mail');
const emailLabel = document.querySelector('label[for="mail"]')
const emailError = document.createElement('h4');
//style and append error message
email.placeholder = 'name123@email.com';
emailError.innerHTML = 'Please enter a valid email';
emailError.hidden = true;
emailError.style.color = 'red';
emailLabel.appendChild(emailError);
//This function and conditional compares the values entered using regex. It the values matches the regex code, it will return true
const emailValidation = () => {
    const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
    //once a value is entered, the error message will appear until the value is in the proper format
    //if a value is entered and deleted, an error message will appear
    if (!email.value) {
        emailError.hidden = false;
        return false;
    } else if (emailRegex.test(email.value) === false) {
        emailError.hidden = false;
        return false;
    } else {
        emailError.hidden = true;
        return true;
    }
}
//The event listener is listening for the keyup event on the emailValidation variable
email.addEventListener('keyup', emailValidation);

//ACTIVITY
const activityLabel = document.querySelector('.activities legend');
const activityError = document.createElement('h5');
//style and append error message
activityError.style.color = 'red';
activityError.innerHTML = 'Please select at least one activity';
activityError.hidden = false;
activityLabel.appendChild(activityError);
// this function is to loop over the check list to see if or not anything is checked
const activityValidation = () => {
   
    for (i = 0; i < activityInput.length; i++) {
    //If one activity is checked, the message should disappear
    if (activityInput[i].checked) {
        activityError.hidden = true;
        return true;
    } else {
        activityError.hidden = false;
        return false;;
    }
  }
}
//The event listener is listening for the keyup event on the activityValidation variable
activityMain.addEventListener('click', activityValidation);


//CARD

const cardDiv = document.querySelector('#credit-card').children[0];
const cardInput = document.getElementById('cc-num');
const cardError = document.createElement('h4');
//style and append error message
cardError.innerHTML = 'Please enter a credit card number between 13 and 16 digits';
cardError.style.color = 'red';
cardError.hidden = true;
cardDiv.appendChild(cardError);
//This function and conditional compares the values entered using regex. It the values matches the regex code, it will return true
const cardValidation = () => {
    let cardRegex = /^\d{13,16}$/;
//The conditional checkes the values and hides the error message if returned true
    if(!cardInput.value) {
        cardError.hidden = true;
        return false;
    } else if (cardInput.value > 0 && cardRegex.test(cardInput.value) === false ) {
        cardError.hidden = false;
        return false;
    } else {
        cardError.hidden = true;
        return true;
    }

}
//The event listener is listening for the keyup event on the cardValidation variable
cardInput.addEventListener('keyup', cardValidation);

//ZIP CODE
const zipCodeDiv = document.querySelector('#credit-card').children[1];
const zipCode = document.getElementById('zip');
const zipCodeLabel = document.querySelector('.zip label');
const zipError = document.createElement('h4');
//style and append error message
zipError.style.color = 'red';
zipError.innerHTML = 'Please enter a 5 digit zip code';
zipError.hidden = true;
zipCodeDiv.appendChild(zipError);
//This function and conditional compares the values entered using regex. It the values matches the regex code, it will return true
const zipValidation = () => {
    const zipRegex = /^\d{5}$/;
//The conditional checkes the values and hides the error message if returned true
    if (!zipCode.value) {
        zipError.hidden = true;
        return false; 
    } else if (zipCode.value > 0 && zipRegex.test(zipCode.value) === false) {
        zipError.hidden = false;
        return false;
    } else {
        zipError.hidden = true;
        return true;
    }
}
//The event listener is listening for the keyup event on the zipValidation variable
zipCode.addEventListener('keyup', zipValidation);

//CVV

const cvv = document.querySelector('#credit-card').children[2];
const cvvInput = document.getElementById('cvv');
const cvvError = document.createElement('h4');
//style and append error message
cvvError.innerHTML = 'Please enter 3 digit cvv number';
cvvError.style.color = 'red';
cvvError.hidden = true;
cvv.appendChild(cvvError);
//This function and conditional compares the values entered using regex. It the values matches the regex code, it will return true
const cvvValidation = () => {
    let cvvRegex = /^\d{3}$/;

    if(!cvvInput.value) {
        cvvError.hidden = true;
        return false;
    } else if(cvvInput.value > 0 && cvvRegex.test(cvvInput.value) === false ) {
        cvvError.hidden = false;
        return false;
    } else {
        cvvError.hidden = true;
        return true;
    }
}
//The event listener is listening for the keyup event on the cvvValidation variable
cvvInput.addEventListener('keyup', cvvValidation);

//***SUBMIT HANDLER***

const button = document.querySelector('button');

button.addEventListener('submit', (e) => {
    if (!nameValidation()) {
        e.preventDefault();
    }
    if (!emailValidation()) {
        e.preventDefault();
    }
    if (!activityValidation()) {
        e.preventDefault;
    }
    if (payment.value === 'credit card') {
        e.preventDefault();
        //cardError.innerHTML = 'Please enter a credit card number between 13 and 16 digits';
    }
    if (!zipValidation()) {
        e.preventDefault();
        //zipError.innerHTML = 'Please enter a 5 digit zip code';
    }
    if (!cvvValidation()) {
        e.preventDefault();
        //cvvError.innerHTML = 'Please enter 3 digit cvv number';
    }
});



