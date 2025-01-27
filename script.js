document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Mengelakkan form daripada dihantar secara default

  // Ambil data daripada form
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // Simpan data ke localStorage
  const userData = {
    username: username,
    email: email,
    password: password
  };

  // Check jika user sudah wujud dalam localStorage
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const isEmailExists = existingUsers.some(user => user.email === email);

  if (isEmailExists) {
    // Jika email sudah ada, berikan mesej error
    document.getElementById('signupMessage').textContent = "Email sudah digunakan!";
    document.getElementById('signupMessage').style.color = "red";
  } else {
    // Jika email tidak ada, tambah pengguna baru
    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Paparkan mesej berjaya
    document.getElementById('signupMessage').textContent = "Tahniah! Anda berjaya sign up. Sila log masuk.";
    document.getElementById('signupMessage').style.color = "green";

    // Clear form selepas berjaya sign up
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
  }
});

// Login process
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mengelakkan form daripada dihantar secara default

  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const user = existingUsers.find(user => user.email === loginEmail && user.password === loginPassword);

  if (user) {
    // Jika login berjaya
    document.getElementById('loginMessage').textContent = "Login berjaya!";
    document.getElementById('loginMessage').style.color = "green";
  } else {
    // Jika login gagal
    document.getElementById('loginMessage').textContent = "Email atau password salah!";
    document.getElementById('loginMessage').style.color = "red";
  }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Mengelakkan form daripada dihantar secara default

  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const user = existingUsers.find(user => user.email === loginEmail && user.password === loginPassword);

  if (user) {
    // Jika login berjaya, redirect ke portal/portal.html
    document.getElementById('loginMessage').textContent = "Login berjaya!";
    document.getElementById('loginMessage').style.color = "green";

    // Redirect ke porta/portal.html selepas 1 saat
    setTimeout(function() {
      window.location.href = 'portal/portal.html'; // Mengarahkan pengguna ke portal.html dalam folder porta
    }, 1000); // Redirect selepas 1 saat (1,000 ms)
  } else {
    // Jika login gagal
    document.getElementById('loginMessage').textContent = "Email atau password salah!";
    document.getElementById('loginMessage').style.color = "red";
  }
});