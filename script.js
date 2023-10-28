function signup() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Save user data in localStorage (not secure for production)
  localStorage.setItem(email, JSON.stringify({ name, password }));
  
  alert('Signup successful. Please log in.');
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Retrieve user data from localStorage (not secure for production)
  const userData = JSON.parse(localStorage.getItem(email));
  
  if (userData && userData.password === password) {
      alert('Login successful.');
  } else {
      alert('Login failed. Check your credentials.');
  }
}

function forgotPassword() {
  const email = document.getElementById('email').value;
  
  // Generate a reset link and send it to the user (not implemented here).
  // In a real application, you would send an email with a link to reset the password.
  
  alert('A reset link has been sent to your email if it exists in our system.');
}
