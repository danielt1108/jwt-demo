let savedToken = '';

const result = document.getElementById('result');
const tokenBox = document.getElementById('tokenBox');
const tokenStatus = document.getElementById('tokenStatus');

function showResult(data) {
  result.textContent = JSON.stringify(data, null, 2);
}

async function testPublicRoute() {
  const response = await fetch('/api/public');
  const data = await response.json();
  showResult(data);
}

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();

  if (data.token) {
    savedToken = data.token;
    tokenBox.value = savedToken;
    tokenStatus.textContent = 'Token generado correctamente.';
  } else {
    savedToken = '';
    tokenBox.value = '';
    tokenStatus.textContent = 'No se ha podido generar el token.';
  }

  showResult(data);
}

async function testProfileWithoutToken() {
  const response = await fetch('/api/profile');
  const data = await response.json();
  showResult(data);
}

async function testProfileWithToken() {
  const response = await fetch('/api/profile', {
    headers: {
      Authorization: `Bearer ${savedToken}`
    }
  });

  const data = await response.json();
  showResult(data);
}
