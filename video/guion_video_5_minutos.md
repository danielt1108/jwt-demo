# Guion para vídeo de máximo 5 minutos

## 0:00 - 0:25 Presentación

En este vídeo voy a enseñar una demo sencilla de autenticación con JWT. La idea es tener una API REST con una ruta pública, una ruta de login que genera un token y una ruta protegida que solo funciona si enviamos ese token correctamente.

## 0:25 - 1:00 Enseñar la app

Aquí tenemos una pequeña interfaz con cuatro botones. El primero prueba una ruta pública, el segundo hace login, el tercero intenta acceder al perfil sin token y el cuarto accede al perfil usando el token generado.

## 1:00 - 1:40 Ruta pública

Pulso el primer botón y vemos que la ruta pública responde correctamente. Esta ruta no necesita autenticación, por eso cualquiera puede acceder.

## 1:40 - 2:25 Login y token

Ahora pulso el botón de login. La aplicación envía usuario y contraseña al backend. Si los datos son correctos, el backend genera un token JWT y lo muestra en pantalla.

## 2:25 - 3:10 Perfil sin token

Ahora intento acceder al perfil sin enviar token. La API devuelve un error de acceso denegado. Esto demuestra que la ruta está protegida.

## 3:10 - 4:10 Perfil con token

Por último, accedo al perfil enviando el token en el header Authorization. Ahora el backend valida el token y permite el acceso a la ruta protegida.

## 4:10 - 5:00 Cierre

Con esta demo hemos visto el flujo básico de JWT: primero el usuario hace login, después recibe un token y finalmente usa ese token para acceder a rutas privadas. En una aplicación real habría que añadir base de datos, contraseñas cifradas, HTTPS y control de roles.
