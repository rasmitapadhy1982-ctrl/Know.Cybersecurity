// Welcome alert (keep this)
window.onload = function() {
    alert("Welcome to my site!");
};

// Password strength checker
const passwordInput = document.getElementById('password');
const resultDiv = document.getElementById('strength-result');

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    let strength = 'Weak';
    let className = 'weak';

    // Simple rules: Length and character variety
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\$\${};':"\\|,.<>\/?]/.test(password);
    const length = password.length;

    if (length >= 12 && hasLower && hasUpper && hasNumber && hasSymbol) {
        strength = 'Strong';
        className = 'strong';
    } else if (length >= 8 && ((hasLower && hasUpper) || (hasNumber && hasSymbol))) {
        strength = 'Medium';
        className = 'medium';
    } else if (length < 6) {
        strength = 'Weak';
        className = 'weak';
    }

    resultDiv.textContent = `Password Strength: ${strength}`;
    resultDiv.className = className;  // Applies color styling
});

// Form submission (updated to handle password field)
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    if (name === '' || password === '') {
        alert('Please fill in both name and password!');
    } else {
        alert(`Thanks, ${name}! Your password is ${resultDiv.textContent.split(': ')[1] || 'not checked'}.`);
    }
});
// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});