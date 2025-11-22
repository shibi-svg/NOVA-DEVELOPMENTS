// Wait for intro animation to complete, then show sign page
window.addEventListener('load', function() {
    setTimeout(() => {
        const introAnimation = document.getElementById('intro-animation');
        const signPage = document.getElementById('sign-page');
        
        introAnimation.style.display = 'none';
        signPage.classList.remove('hidden');
    }, 3500); // Wait for intro animation to complete
});

// Toggle Sign Up Form
function toggleSignUp() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const signButtons = document.querySelector('.sign-buttons');
    
    signButtons.style.display = 'none';
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    
    signupForm.scrollIntoView({ behavior: 'smooth' });
}

// Toggle Log In Form
function toggleLogIn() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const signButtons = document.querySelector('.sign-buttons');
    
    signButtons.style.display = 'none';
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    
    loginForm.scrollIntoView({ behavior: 'smooth' });
}

// Handle Sign Up Form Submission
document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input');
    const formData = {
        fullName: inputs[0].value,
        email: inputs[1].value,
        password: inputs[2].value,
        confirmPassword: inputs[3].value
    };
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Store user data (in a real app, send to server)
    localStorage.setItem('user', JSON.stringify({
        name: formData.fullName,
        email: formData.email
    }));
    
    showMainContent();
});

// Handle Log In Form Submission
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input');
    const email = inputs[0].value;
    
    // Store user data (in a real app, verify with server)
    localStorage.setItem('user', JSON.stringify({
        email: email
    }));
    
    showMainContent();
});

// Show Main Content
function showMainContent() {
    const signPage = document.getElementById('sign-page');
    const mainContent = document.getElementById('main-content');
    
    signPage.classList.add('hidden');
    mainContent.classList.remove('hidden');
}

// Logout Function
function logout() {
    localStorage.removeItem('user');
    location.reload();
}

// Check if user is already logged in
window.addEventListener('load', function() {
    const user = localStorage.getItem('user');
    if (user) {
        setTimeout(() => {
            showMainContent();
        }, 3500);
    }
});

// Handle Contact Form Submission
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input');
    const textarea = this.querySelector('textarea');
    
    const contactData = {
        name: inputs[0].value,
        email: inputs[1].value,
        message: textarea.value,
        toEmail: 'shibinkurishingal@gmail.com'
    };
    
    // Store contact message
    console.log('Contact message:', contactData);
    alert('Thank you for reaching out! We will contact you soon at ' + contactData.email);
    
    // Reset form
    this.reset();
});
