function validate(e) {
    e.preventDefault();

    const email = document.getElementById("email").Value;
    const pass = document.getElementById("pass").Value;
    const msgBox = document.getElementById("message");

    let message = '';

    if (email === '') {
        message = 'Enter an email';
        msgBox.style.color = 'red';
    } else if (pass === '') {
         message = 'Enter a password';
        msgBox.style.color = 'red';

    } else {
         message = 'login success';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message;


}