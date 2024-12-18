



// Form data Capture

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const diycheck = document.getElementById('flexCheckDefault').value;

    const userData = {
        fname: firstname,
        lname : lastname,
        email: email,
        password: password,
        diycheck: diycheck,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Your registration is saved to local storage');

    console.log(userData);
});

//End form data capture