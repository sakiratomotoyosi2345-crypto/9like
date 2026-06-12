// Simple script to store a demo registration in localStorage (demo only)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;

    if (!fullName || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('9like_users') || '[]');
    if (users.some(u => u.email === email)) {
      alert('This email is already registered (demo).');
      return;
    }

    users.push({ fullName, email, password: '***DEMO***', createdAt: new Date().toISOString() });
    localStorage.setItem('9like_users', JSON.stringify(users));

    alert('Registration saved locally (demo). In a real app this would be sent to your server.');
    form.reset();
  });
});
