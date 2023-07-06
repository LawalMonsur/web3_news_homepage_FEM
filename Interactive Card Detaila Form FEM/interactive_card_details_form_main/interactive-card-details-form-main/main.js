const myForm = document.getElementById('myForm');
const cardholder_name = document.getElementById('cardholder_name');
const card_number = document.getElementById('card_number');
const expiry_date = document.getElementById('expiry_date');
const cvc = document.getElementById('cvc');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const cardholder_nameValue = cardholder_name.value;
    const card_numberValue = card_number.value;
    const expiry_dateValue = expiry_date.value;
    const cvcValue = cvc.value;

    if(cardholder_nameValue === '') {
        setErrorFor(cardholder_name, 'Cannot be blank');
    } else {
        setSuccessFor(cardholder_name);
    }
}