#  HOTEL EL RINCÓN DEL CARMEN

##  Descripción general del proyecto

El presente proyecto consiste en el desarrollo de un sitio web moderno, responsive, funcional y visualmente atractivo para el Hotel El Rincón del Carmen, con el objetivo de ofrecer sus servicios en línea, atraer nuevos clientes y permitir la gestión de reservas de habitaciones.

La aplicación fue desarrollada simulando un entorno Full Stack Junior utilizando tecnologías del lado del cliente y almacenamiento local mediante LocalStorage, aplicando buenas prácticas de programación, modularización y diseño responsive.

El sistema permite:

- Consultar habitaciones disponibles.
- Realizar reservas.
- Cancelar reservas.
- Registrarse e iniciar sesión.
- Gestionar habitaciones desde un panel administrativo.
- Gestionar reservas desde el panel administrativo.
- Validar disponibilidad y evitar solapamientos.

---

#  Objetivo del proyecto

Desarrollar un sistema web funcional y modular que permita al Hotel El Rincón del Carmen tener presencia digital y facilitar el proceso de consulta y reserva de habitaciones.

---

#  Tecnologías utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript ES6+

## Arquitectura y componentes

- Web Components
- JavaScript Modular

## Persistencia de datos

- LocalStorage

## Diseño

- Responsive Design
- Mobile First
- Flexbox
- CSS Grid

---

#  Características principales

##  Landing Page

La página principal incluye:

- Hero section interactivo.
- Diseño luxury moderno.
- Habitaciones destacadas.
- Servicios premium.
- Diseño responsive.
- Navegación amigable.
- Footer informativo.

---

##  Sistema de reservas

El sistema permite:

- Consultar disponibilidad por fechas.
- Seleccionar número de huéspedes.
- Visualizar habitaciones disponibles.
- Ver información detallada:
  - camas
  - capacidad
  - servicios
  - precio
- Calcular automáticamente el total.
- Realizar reservas.
- Cancelar reservas.

---

##  Sistema de autenticación

Los usuarios pueden:

- Registrarse.
- Iniciar sesión.
- Mantener sesión activa.
- Reservar habitaciones.

---

##  Panel administrativo

El administrador puede:

- Gestionar habitaciones.
- Crear habitaciones.
- Modificar habitaciones.
- Eliminar habitaciones.
- Gestionar reservas.
- Cancelar reservas.
- Visualizar información de clientes.

---

#  Funcionalidades implementadas

##  Gestión de habitaciones

Cada habitación contiene:

- ID
- Nombre
- Cantidad de camas
- Capacidad máxima
- Precio por noche
- Servicios
- Imagen

---

##  Gestión de reservas

Cada reserva contiene:

- ID
- Usuario
- Habitación
- Fecha de entrada
- Fecha de salida
- Cantidad de huéspedes
- Valor total

---

##  Validación de disponibilidad

Antes de reservar:

- El sistema valida si la habitación sigue disponible.
- Evita reservas duplicadas.
- Evita solapamientos de fechas.

---

##  Cancelación de reservas

Cuando una reserva es cancelada:

- La habitación vuelve automáticamente a estar disponible.

---

#  Lógica implementada

##  Prevención de solapamiento

El sistema verifica:

```javascript
checkIn < reservation.checkOut &&
checkOut > reservation.checkIn
```

Esto evita que una habitación pueda reservarse en el mismo rango de fechas.

---

##  Cálculo automático de noches

El sistema calcula automáticamente:

- Cantidad de noches.
- Valor total.

---

##  Persistencia de información

La información se almacena utilizando:

```javascript
localStorage
```

---

#  Estructura completa del proyecto

```bash
hotel-rincon-carmen/
│
├── index.html
├── reservas.html
├── contacto.html
├── login.html
├── register.html
├── admin.html
│
├── README.md
│
├── assets/
│   │
│   ├── css/
│   │   └── global.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── admin.js
│   │   ├── auth.js
│   │   ├── guards.js
│   │   ├── login.js
│   │   ├── register.js
│   │   ├── reservations.js
│   │   ├── seed.js
│   │   ├── storage.js
│   │   └── utils.js
│   │
│   ├── components/
│   │   ├── navbar.js
│   │   └── footer.js
│   │
│   └── images/
│
└── .gitignore
```

---

#  Explicación de módulos

## storage.js

Maneja:

- Guardado de información.
- Lectura de información.
- Persistencia en LocalStorage.

---

##  reservations.js

Maneja:

- Consulta de disponibilidad.
- Renderizado de habitaciones.
- Reservas.
- Validación de disponibilidad.

---

##  auth.js

Maneja:

- Registro de usuarios.
- Inicio de sesión.
- Persistencia de sesión.

---

##  guards.js

Protege rutas:

- Validación de autenticación.
- Validación de administrador.

---

##  seed.js

Inicializa:

- Habitaciones por defecto.
- Usuario administrador.

---

##  utils.js

Funciones auxiliares:

- Formato de moneda.
- Generación de IDs.
- Cálculo de noches.

---

#  Diseño y experiencia de usuario

El sitio fue diseñado con enfoque:

- Luxury UI.
- Responsive.
- Moderno.
- Minimalista.
- Elegante.

Características visuales:

- Colores oscuros premium.
- Dorado luxury.
- Cards modernas.
- Hover animations.
- Glassmorphism.
- Sombras suaves.
- Grid responsive.

---

#  Responsive Design

Compatible con:

-  Móviles
-  Computadores
-  Tablets

---

#  Seguridad implementada

##  Validaciones

- Campos obligatorios.
- Validación de fechas.
- Validación de sesión.
- Protección de administrador.

---

##  Restricciones

- Solo usuarios registrados pueden reservar.
- Solo administradores acceden al panel.

---

#  Usuarios del sistema

##  Administrador

```txt
Correo:
admin@hotel.com

Contraseña:
admin123
```

---

#  Instalación y ejecución

##  Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

##  Abrir proyecto

Abrir en:

```txt
Visual Studio Code
```

---

##  Ejecutar Live Server

Instalar extensión:

```txt
Live Server
```

---

##  Ejecutar aplicación

Abrir:

```txt
http://127.0.0.1:5500
```

---

#  Uso de LocalStorage

El proyecto almacena:

- Usuarios
- Sesiones
- Habitaciones
- Reservas

---

#  Buenas prácticas implementadas

##  Código modular

Separación de responsabilidades.

---

##  Web Components

Navbar y Footer reutilizables.

---

##  Responsive Design

Adaptación a múltiples dispositivos.

---

##  Clean Code

- Variables descriptivas.
- Funciones reutilizables.
- Código organizado.

---

##  Escalabilidad

Arquitectura preparada para crecer.

---

#  Posibles mejoras futuras

- Integración con backend real.
- Base de datos SQL.
- Pasarela de pagos.
- API REST.
- Panel analytics.
- Confirmación por correo.
- Recuperación de contraseña.
- Dashboard avanzado.

---

# Evidencias del sistema

## Landing Page
- Hero section
- Habitaciones
- Servicios

## Reservas
- Búsqueda dinámica
- Validación de disponibilidad
- Reservas

## Administración
- Gestión de habitaciones
- Gestión de reservas

---

# Autor

Proyecto desarrollado como simulación Full Stack Junior aplicando:

- HTML5
- CSS3
- JavaScript ES6+
- Arquitectura Modular
- Web Components
- LocalStorage

---

# Licencia

Proyecto desarrollado con fines educativos y académicos.