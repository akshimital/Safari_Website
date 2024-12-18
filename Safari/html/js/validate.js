var x = document.getElementById("login");
var y = document.getElementById("signup");
var z = document.getElementById("btn");
var a = document.getElementById("social-icons");

function signup() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "87px";
    a.style.top = "365px";
    a.style.left = "75px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
    a.style.top = "330px";
    a.style.left = "75px";
}

function validateLoginForm(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    // Store login data in local storage (for demonstration purposes)
    localStorage.setItem('loginEmail', email);
    localStorage.setItem('loginPassword', password);

    alert('Login successful! Redirecting to home page.');
    window.location.href = 'home.html'; // Redirect to home page after successful login
    return true;
}

function validateSignupForm(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username.length < 3) {
        alert('Username must be at least 3 characters long.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    // Store signup data in local storage
    const user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem('signupUser', JSON.stringify(user));

    alert('Signup successful! Redirecting to login page.');
    window.location.href = 'signUp.html'; // Redirect to login page after successful signup
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
    login(); // Default to login form; remove this if you want the default to be signup form
});
