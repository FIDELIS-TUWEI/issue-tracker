// Get the form
const forms = document.querySelector('form');
// add event lister for submit and prevent default submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // get the id and assign a variable
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    // check the validity of the input fields before submission
    if ( !name.checkValidity() || !email.checkValidity() || !password.checkValidity() ) {
        alert('Please fill out all fields correctly.')
        return;
    }
    alert('Form submitted successfully');
});