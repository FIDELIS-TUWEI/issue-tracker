// create a form
const form = document.createElement('form');
form.setAttribute('id', 'form');
document.body.append(form);

// create a label
const label = document.createElement('label');
label.setAttribute('for', 'name');
label.innerHTML = `Name:`;
form.appendChild(label);

// create input
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'name');
input.setAttribute('required', 'true');
form.appendChild(input);

// label 2
const label2 = document.createElement('label');
label2.setAttribute('for', 'email');
label2.innerHTML = `Email:`
form.appendChild(label2);

// input 2
const input2 = document.createElement('input');
input2.setAttribute('type', 'email');
input2.setAttribute('id', 'email');
input2.setAttribute('required', 'true');
form.appendChild(input2);

// label 3
const label3 = document.createElement('label');
label3.setAttribute('for', 'password');
label3.innerHTML = `Password:`;
form.appendChild(label3);


// input 3
const input3 = document.createElement('input');
input3.setAttribute('type', 'password');
input3.setAttribute('id', 'password');
input3.setAttribute('required', 'true');
form.appendChild(input3);

// input 4 - submit
const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'submit');
form.appendChild(submit);
