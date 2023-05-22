// Store registered users
var registeredUsers = [];

// Initialize the forms and links
var loginForm = document.getElementById('login-form');
var signupForm = document.getElementById('signup-form');
var loginLink = document.getElementById('login-link');
var signupLink = document.getElementById('signup-link');

// Display the login form by default
loginForm.style.display = 'block';
signupForm.style.display = 'none';

// Add event listeners to the links
loginLink.addEventListener('click', function(e) {
  e.preventDefault();
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

signupLink.addEventListener('click', function(e) {
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

// Sign up form submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('signup-username').value;
  var password = document.getElementById('signup-password').value;

  // Check if the username is already registered
  var userExists = registeredUsers.find(function(user) {
    return user.username === username;
  });

  if (userExists) {
    alert('Username is already registered. Please choose a different username.');
  } else {
    // Register the user
    registeredUsers.push({ username: username, password: password });
    alert('Sign up successful!');
    // Reset the form
    document.getElementById('signup-form').reset();
    // Switch back to the login form
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  }
});

// Login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;

  // Check if the username and password match a registered user
  var user = registeredUsers.find(function(user) {
    return user.username === username && user.password === password;
  });

  if (user) {
    alert('Login successful!');
    // Redirect to another page
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});