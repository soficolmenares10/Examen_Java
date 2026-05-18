import {
  formatCurrency
} from '../js/utils.js';

class RoomCard extends HTMLElement {

  connectedCallback() {

    const room =
      JSON.parse(this.getAttribute('room'));

    this.innerHTML = `

      <div class="room-card">

        <img
          <img src="${room.image}" alt="${room.name}">

        >

        <div class="card-content">

          <h3>${room.name}</h3>

          <p>
            🛏 ${room.beds} camas
          </p>

          <p>
            👥 ${room.capacity} personas
          </p>

          <p>
            ✨ ${room.services}
          </p>

          <h4>
            ${formatCurrency(room.price)}
          </h4>

          <button class="reserve-btn">
            Reservar
          </button>

        </div>

      </div>
    `;
  }
}

customElements.define(
  'room-card',
  RoomCard
);