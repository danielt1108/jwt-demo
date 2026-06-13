const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'clave_demo_no_usar_en_produccion';

app.use(express.json());
app.use(express.static('public'));

const userDemo = {
  id: 1,
  username: 'daniel',
  password: '1234',
  role: 'user'
};

app.get('/api/public', (req, res) => {
  res.json({
    ok: true,
    message: 'Esta es una ruta pública. No necesitas token para acceder.'
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== userDemo.username || password !== userDemo.password) {
    return res.status(401).json({
      ok: false,
      message: 'Usuario o contraseña incorrectos'
    });
  }

  const token = jwt.sign(
    {
      id: userDemo.id,
      username: userDemo.username,
      role: userDemo.role
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({
    ok: true,
    message: 'Login correcto. Token JWT generado.',
    token
  });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      ok: false,
      message: 'Acceso denegado. No se ha enviado ningún token.'
    });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        ok: false,
        message: 'Token inválido o expirado.'
      });
    }

    req.user = user;
    next();
  });
}

app.get('/api/profile', authenticateToken, (req, res) => {
  res.json({
    ok: true,
    message: 'Has accedido a una ruta protegida usando un token válido.',
    user: req.user
  });
});

app.listen(PORT, () => {
  console.log(`Demo JWT funcionando en http://localhost:${PORT}`);
});
