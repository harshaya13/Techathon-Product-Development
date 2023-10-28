function signup() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  localStorage.setItem(email, JSON.stringify({ name, password }));
  
  alert('Signup successful. Please log in.');
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userData = JSON.parse(localStorage.getItem(email));
  
  if (userData && userData.password === password) {
      alert('Login successful.');
  } else {
      alert('Login failed. Check your credentials.');
  }
}

function forgotPassword() {
  const email = document.getElementById('email').value;

  alert('A reset link has been sent to your email if it exists in our system.');
}
