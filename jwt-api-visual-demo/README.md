# Demo visual de autenticación JWT

Proyecto sencillo con Node.js, Express y JWT para demostrar cómo proteger una ruta privada.

## Instalación

```bash
npm install
```

Copia el archivo `.env.example` y renómbralo a `.env`:

```bash
cp .env.example .env
```

En Windows también puedes hacerlo manualmente desde el explorador.

## Ejecutar

```bash
npm run dev
```

Después abre:

```txt
http://localhost:3000
```

## Usuario de prueba

```txt
Usuario: daniel
Contraseña: 1234
```

## Qué demuestra la app

1. Una ruta pública que funciona sin token.
2. Un login que genera un JWT.
3. Una ruta protegida que falla sin token.
4. La misma ruta protegida funcionando con token.
