import { Storage } from './storage.js';

import {
  calculateNights,
  formatCurrency,
  generateId
} from './utils.js';

const searchForm =
  document.getElementById('searchForm');

const availableRooms =
  document.getElementById('availableRooms');

/* =========================
   BUSCAR DISPONIBILIDAD
========================= */

if (searchForm) {

  searchForm.addEventListener('submit', event => {

    event.preventDefault();

    const rooms =
      Storage.get('rooms');

    const reservations =
      Storage.get('reservations');

    const checkIn =
      document.getElementById('checkIn').value;

    const checkOut =
      document.getElementById('checkOut').value;

    const guests =
      Number(
        document.getElementById('guests').value
      );

    /* =========================
       VALIDACIONES
    ========================= */

    if (!checkIn || !checkOut || !guests) {

      alert('Completa todos los campos');

      return;
    }

    if (checkIn >= checkOut) {

      alert(
        'La fecha de salida debe ser mayor'
      );

      return;
    }

    /* =========================
       FILTRAR HABITACIONES
    ========================= */

    const available = rooms.filter(room => {

      const overlaps =
        reservations.some(reservation => {

          return (
            reservation.roomId === room.id &&
            checkIn < reservation.checkOut &&
            checkOut > reservation.checkIn
          );
        });

      return (
        room.capacity >= guests &&
        !overlaps
      );
    });

    renderRooms(
      available,
      checkIn,
      checkOut,
      guests
    );
  });
}

/* =========================
   RENDER HABITACIONES
========================= */

function renderRooms(
  rooms,
  checkIn,
  checkOut,
  guests
) {

  availableRooms.innerHTML = '';

  if (rooms.length === 0) {

    availableRooms.innerHTML = `

      <div class="no-rooms">

        <h3>
          No hay habitaciones disponibles
        </h3>

      </div>
    `;

    return;
  }

  rooms.forEach(room => {

    const totalNights =
      calculateNights(
        checkIn,
        checkOut
      );

    const total =
      totalNights * room.price;

    const card =
      document.createElement('div');

    card.classList.add('card');

    const session =
      JSON.parse(
        localStorage.getItem('session')
      );

    card.innerHTML = `

      <div class="room-image">

        <img
          src="${room.image}"
          alt="${room.name}"
        >

      </div>

      <div class="card-content">

        <h3>${room.name}</h3>

        <p>
          🛏 <strong>Camas:</strong>
          ${room.beds}
        </p>

        <p>
          👥 <strong>Capacidad:</strong>
          ${room.capacity} personas
        </p>

        <p>
          ✨ ${room.services}
        </p>

        <h4>
          ${formatCurrency(total)}
        </h4>

        <button
          class="reserve-btn"
          data-id="${room.id}"
        >
          ${
            session
              ? 'Reservar ahora'
              : 'Inicia sesión para reservar'
          }
        </button>

      </div>
    `;

    const reserveButton =
      card.querySelector('.reserve-btn');

    reserveButton.addEventListener(
      'click',
      () => {

        reserveRoom(
          room.id,
          checkIn,
          checkOut,
          guests,
          total
        );
      }
    );

    availableRooms.appendChild(card);
  });
}

/* =========================
   RESERVAR
========================= */

function reserveRoom(
  roomId,
  checkIn,
  checkOut,
  guests,
  total
) {

  const session =
    JSON.parse(
      localStorage.getItem('session')
    );

  /* =========================
     VALIDAR LOGIN
  ========================= */

  if (!session) {

    alert(
      'Debes iniciar sesión para reservar'
    );

    window.location.href =
      'login.html';

    return;
  }

  const reservations =
    Storage.get('reservations');

  /* =========================
     VALIDAR DISPONIBILIDAD
  ========================= */

  const stillAvailable =
    !reservations.some(reservation => {

      return (
        reservation.roomId === roomId &&
        checkIn < reservation.checkOut &&
        checkOut > reservation.checkIn
      );
    });

  if (!stillAvailable) {

    alert(
      'La habitación ya no está disponible'
    );

    return;
  }

  /* =========================
     CREAR RESERVA
  ========================= */

  const reservation = {

    id: generateId(),

    userId: session.id,

    roomId,

    checkIn,

    checkOut,

    guests,

    total
  };

  reservations.push(reservation);

  Storage.save(
    'reservations',
    reservations
  );

  alert(
    'Reserva realizada correctamente'
  );

  availableRooms.innerHTML = '';
}